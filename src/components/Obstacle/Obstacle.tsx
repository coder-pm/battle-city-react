import './Obstacle.scss';
import React, {Component, ReactNode} from 'react';
import {OBSTACLE_HEIGHT, OBSTACLE_WIDTH} from '../../constants';
import ObstaclePropsModel from "./ObstaclePropsModel";
import Stateless from "../../game/models/Stateless";
import {Collision} from "../../game/enums/Collision";
import World from "../../game/classes/World";
import {ObstacleType} from "../../game/enums/ObstacleType";

/**
 * Class Obstacle - obstacle component.
 */
export default class Obstacle extends Component<ObstaclePropsModel, Stateless> {
    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        let collision: Collision;
        switch (this.props.type) {
            case ObstacleType.WATER:
                collision = Collision.BLOCK_MOVE;
                break;
            case ObstacleType.FOREST:
                collision = Collision.BLOCK_NONE;
                break;
            default:
                collision = Collision.BLOCK_ALL
        }
        World.registerObject(
            {
                id: this.props.id,
                location: {
                    x: this.props.location.x,
                    y: this.props.location.y
                },
                dimension: {
                    width: this.props.dimension ? this.props.dimension.width : OBSTACLE_WIDTH,
                    height: this.props.dimension ? this.props.dimension.height : OBSTACLE_HEIGHT
                }
            },
            collision
        );
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        World.removeObject(this.props.id);
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className={`obstacle ${this.props.type}`}
                style={{
                    left: this.props.location.x,
                    top: this.props.location.y,
                    width: this.props.dimension ? this.props.dimension.width : OBSTACLE_WIDTH,
                    height: this.props.dimension ? this.props.dimension.height : OBSTACLE_HEIGHT
                }}
            />
        );
    }
}