import './Missile.scss';
import React, {Component, ReactNode} from 'react';
import {GAME_FRAMERATE, MISSILE_HEIGHT, MISSILE_WIDTH} from "../../constants";
import MissilePropsModel from "./MissilePropsModel";
import MissileStateModel from "./MissileStateModel";
import {Collision} from "../../game/enums/Collision";
import {MISSILE_MOVE_HANDLER} from "../../game/handlers/MissileMoveHandler";

/**
 * Class Missile - missile component.
 */
export default class Missile extends Component<MissilePropsModel, MissileStateModel> {
    /**
     * Local properties.
     */
    protected loopId: number = 0;

    /**
     * Missile constructor.
     *
     * @param props - properties
     */
    public constructor(props: MissilePropsModel) {
        super(props);

        this.state = {location: this.props.location};
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
        this.props.world.removeObject(this.props.id);
        window.clearInterval(this.loopId);
    }

    /**
     * Game loop tick.
     */
    protected tick(): void {
        // handle move
        const move = MISSILE_MOVE_HANDLER({
            id: this.props.id,
            tankId: this.props.tankId,
            rotation: this.props.rotation,
            direction: this.props.direction,
            axis: this.props.axis,
            location: this.state.location,
            dimension: {
                width: MISSILE_WIDTH,
                height: MISSILE_HEIGHT
            }
        }, this.props.world, this.props.direction, this.props.axis);

        // post move related actions
        if (move.hitObjects.length > 0) {
            this.props.handleFellMissile(this.props.id, this.props.tankId, move.hitObjects);
        } else {
            this.setState({
                location: move.location
            });
        }
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