import './Board.scss';
import React, {Component, ReactNode} from 'react';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH, TANK_HEIGHT, TANK_WIDTH} from "../../constants";
import Missile from "../Missile";
import Obstacle from "../Obstacle";
import uuidv4 from 'uuid/v4';
import assetSoundShot from "../../assets/audio/shot.wav";
import assetSoundIntro from '../../assets/audio/intro.wav';
import BoardStateModel from "./BoardStateModel";
import {MAP_1} from "../../game/maps/Map1";
import {Collision} from "../../game/enums/Collision";
import MissileModel from "../../game/models/components/MissileModel";
import TankModel from "../../game/models/components/TankModel";
import {ObstacleType} from "../../game/enums/ObstacleType";
import BoardPropsModel from "./BoardPropsModel";
import {TankActor} from "../../game/enums/TankActor";
import Structure from "../../game/models/Structure";

/**
 * Class Board - board component.
 */
export default class Board extends Component<BoardPropsModel, BoardStateModel> {
    /**
     * Available keyboard codes.
     */
    protected static readonly AVAILABLE_KEYBOARD_CODES: Array<string> = ['Escape'];

    /**
     * Scheduled timer ids
     */
    protected timerIds: { [index: string]: number } = {};

    /**
     * Board constructor.
     *
     * @param props - properties
     */
    public constructor(props: BoardPropsModel) {
        super(props);

        this.state = {
            tanks: [
                {
                    id: uuidv4(),
                    location: {x: 25, y: 25},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 90,
                    actor: TankActor.SELF
                },
                {
                    id: uuidv4(),
                    location: {x: 1061, y: 124},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    actor: TankActor.AI
                },
                {
                    id: uuidv4(),
                    location: {x: 1061, y: 224},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    actor: TankActor.AI
                },
                {
                    id: uuidv4(),
                    location: {x: 1061, y: 424},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    actor: TankActor.AI
                },
                {
                    id: uuidv4(),
                    location: {x: 1061, y: 702},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 0,
                    actor: TankActor.AI
                }
            ],
            obstacles: MAP_1,
            missiles: [],
            sounds: []
        };
        this.handleKeyboard = this.handleKeyboard.bind(this);
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
        this.spawnTank = this.spawnTank.bind(this);
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        window.addEventListener('keydown', this.handleKeyboard);
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        window.removeEventListener('keydown', this.handleKeyboard);
        for (const id of Object.values(this.timerIds)) {
            window.clearInterval(id);
        }
    }

    /**
     * Keyboard handler.
     *
     * @param e - keyboard event
     */
    protected handleKeyboard(e: KeyboardEvent): void {
        if (Board.AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            if (e.code === 'Escape') {
                this.props.handleStopGame();
            }
        }
    }

    /**
     * Missile fire handler.
     *
     * @param missile - missile definition
     */
    protected handleFireMissile(missile: MissileModel): void {
        if (this.state.missiles.filter((m) => m.tankId === missile.tankId).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile),
                sounds: this.state.sounds.concat({id: missile.id})
            });
            this.deferTimer(() => this.setState({
                sounds: this.state.sounds.filter((sound) => sound.id !== missile.id)
            }), 500);
        }
    }

    /**
     * Missile fell handler.
     *
     * @param id - missile id
     * @param tankId - id of tank that fired a missile
     * @param hitObjects - objects that were hit by missile
     */
    protected handleFellMissile(id: string, tankId: string, hitObjects: Array<Structure>): void {
        const newState: any = {};
        const ownerTank = this.state.tanks.filter((tank) => tank.id === tankId).shift();
        if (ownerTank) {
            // remove hit missiles
            newState.missiles = this.state.missiles.filter(
                (missile) => !(
                    missile.id === id ||
                    hitObjects.filter((o) => o.id === missile.id).length > 0
                )
            );
            // remove hit destructible obstacles
            newState.obstacles = this.state.obstacles.filter(
                (obstacle) => !(
                    hitObjects.filter((o) => o.id === obstacle.id).length > 0 &&
                    // it should be not possible to destroy metal and transparent obstacles
                    [ObstacleType.METAL, ObstacleType.TRANSPARENT].indexOf(obstacle.type) === -1
                )
            );
            // remove hit tanks
            newState.tanks = this.state.tanks.filter(
                (tank) => {
                    if (
                        // this tank wasn't hit
                        hitObjects.filter((o) => o.id === tank.id).length === 0 ||
                        // ignore if ai hit ai
                        (tank.actor === TankActor.AI && ownerTank.actor === TankActor.AI) ||
                        // ignore if we hit self
                        tank.id === ownerTank.id
                    ) {
                        return true;
                    }
                    // set respawn tank timer
                    this.deferTimer(() => this.spawnTank(tank), 2500);
                    return false;
                }
            );
            this.setState(newState);
        }
    }

    /**
     * Spawn tank.
     *
     * @param tank - tank definition
     */
    protected spawnTank(tank: TankModel): void {
        // check if its possible to spawn tank here
        if (this.props.world.isIntersecting(tank, Collision.BLOCK_MOVE).length === 0) {
            this.setState({
                tanks: this.state.tanks.concat(tank)
            });
        } else {
            // defer spawning
            this.deferTimer(() => this.spawnTank(tank), 1000);
        }
    }

    /**
     * Defer callback.
     *
     * @param callback - callback
     * @param delay - delay
     */
    protected deferTimer(callback: Function, delay: number) {
        const id = window.setTimeout(() => {
            callback();
            delete this.timerIds[id];
        }, delay);
        this.timerIds[id] = id;
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className="board"
                style={{width: BOARD_WIDTH, height: BOARD_HEIGHT}}
            >
                {
                    this.state.tanks.map((tank) => (
                        <Tank
                            key={tank.id}
                            id={tank.id}
                            actor={tank.actor}
                            location={tank.location}
                            rotation={tank.rotation}
                            world={this.props.world}
                            handleFireMissile={this.handleFireMissile}
                        />
                    ))
                }
                {
                    this.state.obstacles.map((obstacle) => (
                        <Obstacle
                            key={obstacle.id}
                            id={obstacle.id}
                            type={obstacle.type}
                            location={obstacle.location}
                            dimension={obstacle.dimension}
                            world={this.props.world}
                        />
                    ))
                }
                {
                    this.state.missiles.map((missile) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            tankId={missile.tankId}
                            location={missile.location}
                            rotation={missile.rotation}
                            world={this.props.world}
                            handleFellMissile={this.handleFellMissile}
                        />
                    ))
                }
                {
                    this.state.sounds.map((sound) => (
                        <audio key={sound.id} src={assetSoundShot} preload="auto" autoPlay={true}/>
                    ))
                }
                <audio src={assetSoundIntro} preload="auto" autoPlay={true}/>
            </div>
        );
    }
}