import React, {Component} from 'react';
import './Obstacle.scss';
import World from "../../logic/World";
import {OBSTACLE_HEIGHT, OBSTACLE_WIDTH} from "../../constants";

class Obstacle extends Component {
    componentDidMount() {
        if (['brick', 'metal'].indexOf(this.props.type) > -1) {
            World.registerObject(this.props.id, this.props.x, this.props.y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
        }
    }

    componentWillUnmount() {
        if (['brick', 'metal'].indexOf(this.props.type) > -1) {
            World.removeObject(this.props.id);
        }
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