import React, {Component} from 'react';
import './Obstacle.scss';
import World from "../../logic/World";
import {
    COLLISION_BLOCK_ALL,
    COLLISION_BLOCK_MOVE,
    OBSTACLE_HEIGHT,
    OBSTACLE_TYPE_FOREST,
    OBSTACLE_TYPE_WATER,
    OBSTACLE_WIDTH
} from '../../constants';

class Obstacle extends Component {
    componentDidMount() {
        let collision;
        switch (this.props.type) {
            case OBSTACLE_TYPE_WATER:
                collision = COLLISION_BLOCK_MOVE;
                break;
            case OBSTACLE_TYPE_FOREST:
                collision = null;
                break;
            default:
                collision = COLLISION_BLOCK_ALL
        }
        World.registerObject(
            this.props.id,
            collision,
            this.props.x,
            this.props.y,
            OBSTACLE_WIDTH,
            OBSTACLE_HEIGHT
        );
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
    }

    render() {
        return (
            <div
                className={`obstacle ${this.props.type}`}
                style={{
                    left: this.props.x,
                    top: this.props.y,
                    width: OBSTACLE_WIDTH,
                    height: OBSTACLE_HEIGHT
                }}
            />
        );
    }
}

export default Obstacle;