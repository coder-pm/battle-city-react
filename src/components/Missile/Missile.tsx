import React, {Component, ReactNode} from 'react';
import {GAME_FRAMERATE, MISSILE_HEIGHT, MISSILE_MOVE_STEP, MISSILE_WIDTH, TANK_WIDTH} from "../../constants";
import World from "../../logic/World";
import {Collision} from "../../enums/Collision";
import './Missile.scss';

/**
 * Class Missile - missile component.
 */
export default class Missile extends Component<any, any> {
    /**
     * Missile direction map.
     */
    protected static readonly DIRECTION_MAP: any = {
        0: '-top',
        90: '+left',
        180: '+top',
        270: '-left'
    };

    /**
     * Local properties.
     */
    protected step: number;
    protected axis: string;
    protected loopId: number = 0;

    /**
     * Missile constructor.
     *
     * @param props - properties
     */
    public constructor(props: any) {
        super(props);

        const direction = Missile.DIRECTION_MAP[this.props.r].substr(0, 1);
        const operator = parseInt(direction + 1);
        this.step = operator * MISSILE_MOVE_STEP;
        this.axis = Missile.DIRECTION_MAP[this.props.r].substr(1);
        const positionFix = Math.round(TANK_WIDTH / 2) - Math.round(MISSILE_WIDTH / 2);
        const nextCoordinates = this.calculateNextCoordinates(
            Math.round(TANK_WIDTH / 2) * operator,
            this.props.x + positionFix,
            this.props.y + positionFix
        );
        this.state = {
            x: nextCoordinates.x,
            y: nextCoordinates.y
        };
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        World.registerObject(
            {id: this.props.id},
            Collision.BLOCK_ALL,
            this.state.x,
            this.state.y,
            MISSILE_WIDTH,
            MISSILE_HEIGHT
        );
        this.loopId = window.setInterval(() => this.tick(), GAME_FRAMERATE);
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        World.removeObject(this.props.id);
        window.clearInterval(this.loopId);
    }

    /**
     * Game loop tick.
     */
    protected tick(): void {
        // calculate new coordinates and check if missile may move there
        const newCoords = this.calculateNextCoordinates();
        const objectIds = World.isIntersecting(
            this.props.id,
            Collision.BLOCK_SHOT,
            newCoords.x,
            newCoords.y,
            MISSILE_WIDTH,
            MISSILE_HEIGHT
        );

        // handle missile fell if it hits other object or continue moving
        if (objectIds.length > 0) {
            this.props.handleFellMissile(this.props.id, this.props.tank, objectIds);
        } else {
            this.setState(newCoords);
            World.updateObject(this.props.id, this.state.x, this.state.y);
        }
    }

    /**
     * Calculate missile next coordinates.
     *
     * @param step - how far missile will move
     * @param x - position x to move from
     * @param y - position y to move from
     */
    protected calculateNextCoordinates(
        step: number = this.step,
        x: number = this.state.x,
        y: number = this.state.y
    ): any {
        return {
            x: this.axis === 'left' ? (x + step) : x,
            y: this.axis === 'top' ? (y + step) : y
        };
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className="missile"
                style={{
                    top: this.state.y,
                    left: this.state.x,
                    width: MISSILE_WIDTH,
                    height: MISSILE_HEIGHT
                }}
            />
        );
    }
}