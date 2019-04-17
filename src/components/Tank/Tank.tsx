import React, {Component, ReactNode} from 'react';
import './Tank.scss';
import {
    GAME_FRAMERATE,
    MISSILE_THROTTLE_TIME,
    OBSTACLE_HEIGHT,
    OBSTACLE_WIDTH,
    TANK_HEIGHT,
    TANK_MOVE_STEP,
    TANK_WIDTH
} from "../../constants";
import World from "../../logic/World";
import uuidv4 from 'uuid/v4';
import {Collision} from "../../enums/Collision";

const AVAILABLE_KEYBOARD_CODES = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];

/**
 * Class Tank - tank component.
 */
export default class Tank extends Component<any, any> {
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
    constructor(props: any) {
        super(props);

        this.state = {
            x: this.props.x,
            y: this.props.y,
            r: this.props.r
        };
        this.activeKey = '';
        this.lastMissile = new Date().getTime();
        this.handleKeyboard = this.handleKeyboard.bind(this);
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        World.registerObject(
            {id: this.props.id, ai: this.props.ai},
            Collision.BLOCK_ALL,
            this.state.x,
            this.state.y,
            TANK_WIDTH,
            TANK_HEIGHT);
        this.loopId = window.setInterval(() => this.tick(), GAME_FRAMERATE);

        // start "artificial intelligence"
        if (!this.props.ai) {
            window.addEventListener('keydown', this.handleKeyboard);
            window.addEventListener('keyup', this.handleKeyboard);
        }
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        World.removeObject(this.props.id);
        window.clearInterval(this.loopId);

        if (!this.props.ai) {
            window.removeEventListener('keydown', this.handleKeyboard);
            window.removeEventListener('keyup', this.handleKeyboard);
        }
    }

    /**
     * Keyboard handler.
     *
     * @param e - synthetic event
     */
    protected handleKeyboard(e: any): void {
        if (AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            if (e.code === 'Space' && e.type === 'keydown') {
                this.fireMissile();
            } else {
                if (e.type === 'keydown') {
                    this.activeKey = e.code;
                } else if (this.activeKey === e.code) {
                    this.activeKey = '';
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
                tank: {id: this.props.id, ai: this.props.ai},
                x: this.state.x,
                y: this.state.y,
                r: this.state.r
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
        if (this.props.ai) {
            this.ai();
        }

        // handle active key
        if (this.activeKey) {
            let x = this.state.x;
            let y = this.state.y;
            let r = this.state.r;
            let initialDirection = r;
            let correctionAxis = 'x';
            switch (this.activeKey) {
                case 'ArrowUp':
                    y -= TANK_MOVE_STEP;
                    r = 0;
                    break;
                case 'ArrowRight':
                    x += TANK_MOVE_STEP;
                    r = 90;
                    correctionAxis = 'y';
                    break;
                case 'ArrowDown':
                    y += TANK_MOVE_STEP;
                    r = 180;
                    break;
                case 'ArrowLeft':
                    x -= TANK_MOVE_STEP;
                    r = 270;
                    correctionAxis = 'y';
                    break;
                default:
            }

            // move correction (stick to grid)
            if (initialDirection !== r) {
                if (correctionAxis === 'x') {
                    x = 3 + (Math.round(x / OBSTACLE_WIDTH) * OBSTACLE_WIDTH);
                } else {
                    y = 3 + (Math.round(y / OBSTACLE_HEIGHT) * OBSTACLE_HEIGHT);
                }
            }

            // intersection check
            if (World.isIntersecting(
                this.props.id,
                Collision.BLOCK_MOVE,
                x,
                y,
                TANK_WIDTH,
                TANK_HEIGHT).length === 0
            ) {
                this.setState({x: x, y: y, r: r});
                World.updateObject(this.props.id, this.state.x, this.state.y);
                this.isStuck = false;
            } else {
                // just rotate in case of intersection
                this.isStuck = true;
                this.setState({r: r});
            }
        }
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className={`tank${this.props.ai ? ' ai' : ''}`}
                style={{
                    transform: `rotate(${this.state.r}deg)`,
                    top: `${this.state.y}px`,
                    left: `${this.state.x}px`,
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }}
            >
            </div>
        );
    }
}