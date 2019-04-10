import React, {Component} from 'react';
import './Obstacle.scss';
import World from "../../logic/World";
import {OBSTACLE_HEIGHT, OBSTACLE_WIDTH} from "../../constants";

class Obstacle extends Component {
    componentDidMount() {
        World.registerObject(this.props.id, this.props.x, this.props.y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
    }

    render() {
        return (
            <div
                className="obstacle"
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