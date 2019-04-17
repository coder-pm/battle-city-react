import React, {Component, ReactNode} from 'react';
import World from "../../logic/World";
import {OBSTACLE_HEIGHT, OBSTACLE_TYPE_FOREST, OBSTACLE_TYPE_WATER, OBSTACLE_WIDTH} from '../../constants';
import {Collision} from "../../enums/Collision";
import './Obstacle.scss';

export default class Obstacle extends Component<any, any> {
    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        let collision: string;
        switch (this.props.type) {
            case OBSTACLE_TYPE_WATER:
                collision = Collision.BLOCK_MOVE;
                break;
            case OBSTACLE_TYPE_FOREST:
                collision = Collision.BLOCK_NONE;
                break;
            default:
                collision = Collision.BLOCK_ALL
        }
        World.registerObject(
            {id: this.props.id},
            collision,
            this.props.x,
            this.props.y,
            this.props.w ? this.props.w : OBSTACLE_WIDTH,
            this.props.h ? this.props.h : OBSTACLE_HEIGHT
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
                    left: this.props.x,
                    top: this.props.y,
                    width: this.props.w ? this.props.w : OBSTACLE_WIDTH,
                    height: this.props.h ? this.props.h : OBSTACLE_HEIGHT
                }}
            />
        );
    }
}