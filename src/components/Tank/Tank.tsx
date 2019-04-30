import './Tank.scss';
import React, {Component, ReactNode} from 'react';
import {
    GAME_FRAMERATE,
    MISSILE_HEIGHT,
    MISSILE_THROTTLE_TIME,
    MISSILE_WIDTH,
    TANK_HEIGHT,
    TANK_WIDTH
} from "../../constants";
import uuidv4 from 'uuid/v4';
import TankPropsModel from "./TankPropsModel";
import TankStateModel from "./TankStateModel";
import {Collision} from "../../game/enums/Collision";
import {TankActor} from "../../game/enums/TankActor";
import Network from "../../game/classes/Network";
import {NetworkPacket} from "../../game/enums/NetworkPacket";
import {TANK_MOVE_HANDLER} from "../../game/handlers/TankMoveHandler";
import ServerTankEventKeyboardPacket from "../../game/models/network/ServerTankEventKeyboardPacket";

/**
 * Class Tank - tank component.
 */
export default class Tank extends Component<TankPropsModel, TankStateModel> {
    /**
     * Available keyboard codes.
     */
    protected static readonly AVAILABLE_KEYBOARD_CODES: Array<string> = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'
    ];

    /**
     * Local properties.
     */
    protected activeKey: string;
    protected lastMissile: number;
    protected isStuck: boolean = false;
    protected loopId: number = 0;

    /**
     * Tank constructor.
     *
     * @param props - properties
     */
    constructor(props: TankPropsModel) {
        super(props);

        this.state = {
            location: {
                x: this.props.location.x,
                y: this.props.location.y
            },
            rotation: this.props.rotation
        };
        this.activeKey = '';
        this.lastMissile = new Date().getTime();
        this.handleKeyboard = this.handleKeyboard.bind(this);
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        this.props.world.registerObject(
            {
                id: this.props.id,
                location: {
                    x: this.state.location.x,
                    y: this.state.location.y
                },
                dimension: {
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }
            },
            Collision.BLOCK_ALL
        );
        this.loopId = window.setInterval(() => this.tick(), GAME_FRAMERATE);

        // start "artificial intelligence"
        if (this.props.actor === TankActor.SELF) {
            window.addEventListener('keydown', this.handleKeyboard);
            window.addEventListener('keyup', this.handleKeyboard);
        }

        // listen to keyboard event
        Network.listen(NetworkPacket.TANK_EVENT_KEYBOARD, (packet: ServerTankEventKeyboardPacket) => {
            if (this.props.id === packet.tankId) {
                this.activeKey = packet.key;
                this.setState({
                    location: packet.location,
                    rotation: packet.rotation
                })
            }
        })
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        this.props.world.removeObject(this.props.id);
        window.clearInterval(this.loopId);

        if (this.props.actor === TankActor.SELF) {
            window.removeEventListener('keydown', this.handleKeyboard);
            window.removeEventListener('keyup', this.handleKeyboard);
        }
    }

    /**
     * Keyboard handler.
     *
     * @param e - keyboard event
     */
    protected handleKeyboard(e: KeyboardEvent): void {
        if (Tank.AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            if (e.code === 'Space' && e.type === 'keydown') {
                this.fireMissile();
            } else {
                if (e.type === 'keydown') {
                    this.activeKey = e.code;
                    Network.emit(NetworkPacket.TANK_EVENT_KEYBOARD, this.activeKey);
                } else if (this.activeKey === e.code) {
                    this.activeKey = '';
                    Network.emit(NetworkPacket.TANK_EVENT_KEYBOARD, '');
                }
            }
        }
    }

    /**
     * File missile handler.
     */
    protected fireMissile(): void {
        if ((this.lastMissile + MISSILE_THROTTLE_TIME) < new Date().getTime()) {
            this.lastMissile = new Date().getTime();
            this.props.handleFireMissile({
                id: uuidv4(),
                tankId: this.props.id,
                location: this.state.location,
                dimension: {width: MISSILE_WIDTH, height: MISSILE_HEIGHT},
                rotation: this.state.rotation
            });
        }
    }

    /**
     * Artificial intelligence handler.
     */
    protected ai(): void {
        if (!this.activeKey || this.isStuck) {
            // randomize keyboard click when tank has no active key or if it stucked
            const keys = [
                'ArrowUp',
                'ArrowRight',
                'ArrowDown',
                'ArrowLeft'
            ].filter((key) => key !== this.activeKey);
            this.activeKey = keys[Math.floor(Math.random() * keys.length)];
        }

        // randomize fire missile action
        if ((this.lastMissile + Math.floor(Math.random() * 3000) + 1500) < new Date().getTime()) {
            this.fireMissile();
        }
    }

    /**
     * Game loop tick.
     */
    protected tick(): void {
        // call ai if active
        if (this.props.actor === TankActor.AI) {
            this.ai();
        }

        // handle active key
        const move = TANK_MOVE_HANDLER({
            id: this.props.id,
            location: this.state.location,
            rotation: this.state.rotation,
            actor: this.props.actor,
            dimension: {
                width: TANK_WIDTH,
                height: TANK_HEIGHT
            }
        }, this.props.world, this.isStuck, this.activeKey);
        this.setState({
            location: move.location,
            rotation: move.rotation
        });
        this.isStuck = move.isStuck;
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className={`tank actor-${this.props.actor}`}
                style={{
                    transform: `rotate(${this.state.rotation}deg)`,
                    top: `${this.state.location.y}px`,
                    left: `${this.state.location.x}px`,
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }}
            >
            </div>
        );
    }
}