import './Missile.scss';
import React, {Component, ReactNode} from 'react';
import {GAME_FRAMERATE, MISSILE_HEIGHT, MISSILE_MOVE_STEP, MISSILE_WIDTH, TANK_WIDTH} from "../../constants";
import MissilePropsModel from "./MissilePropsModel";
import MissileStateModel from "./MissileStateModel";
import World from "../../game/classes/World";
import {Collision} from "../../game/enums/Collision";
import Point from "../../game/models/Point";

/**
 * Class Missile - missile component.
 */
export default class Missile extends Component<MissilePropsModel, MissileStateModel> {
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
    public constructor(props: MissilePropsModel) {
        super(props);

        const direction = Missile.DIRECTION_MAP[this.props.rotation].substr(0, 1);
        const operator = parseInt(direction + 1);
        this.step = operator * MISSILE_MOVE_STEP;
        this.axis = Missile.DIRECTION_MAP[this.props.rotation].substr(1);
        const positionFix = Math.round(TANK_WIDTH / 2) - Math.round(MISSILE_WIDTH / 2);
        this.state = {
            location: this.calculateNextCoordinates(
                // half tank + offset to prevent collision with missile while firing and moving
                (Math.round(TANK_WIDTH / 2) + 10) * operator,
                {
                    x: this.props.location.x + positionFix,
                    y: this.props.location.y + positionFix
                }
            )
        };
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        World.registerObject(
            {
                id: this.props.id,
                location: {
                    x: this.state.location.x,
                    y: this.state.location.y
                },
                dimension: {
                    width: MISSILE_WIDTH,
                    height: MISSILE_HEIGHT
                }
            },
            Collision.BLOCK_ALL
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
        const objectIds = World.isIntersecting({
                id: this.props.id,
                location: {
                    x: newCoords.x,
                    y: newCoords.y
                },
                dimension: {
                    width: MISSILE_WIDTH,
                    height: MISSILE_HEIGHT
                }
            },
            Collision.BLOCK_SHOT
        );

        // handle missile fell if it hits other object or continue moving
        if (objectIds.length > 0) {
            this.props.handleFellMissile(this.props.id, this.props.owner, objectIds);
        } else {
            this.setState({location: newCoords});
            World.updateObject(this.props.id, this.state.location);
        }
    }

    /**
     * Calculate missile next coordinates.
     *
     * @param step - how far missile will move
     * @param location - initial position
     */
    protected calculateNextCoordinates(step: number = this.step, location: Point = this.state.location): Point {
        return {
            x: this.axis === 'left' ? (location.x + step) : location.x,
            y: this.axis === 'top' ? (location.y + step) : location.y
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
                    top: this.state.location.y,
                    left: this.state.location.x,
                    width: MISSILE_WIDTH,
                    height: MISSILE_HEIGHT
                }}
            />
        );
    }
}