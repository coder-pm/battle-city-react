import React, {Component} from 'react';
import './Missile.scss';
import {BOARD_HEIGHT, BOARD_WIDTH, GAME_FRAMERATE, MISSILE_MOVE_STEP} from "../../constants";
import World from "../../logic/World";

const DIRECTION_MAP = {
    0: '-top',
    90: '+left',
    180: '+top',
    270: '-left'
};

class Missile extends Component {
    constructor(props) {
        super(props);

        const direction = DIRECTION_MAP[this.props.r].substr(0, 1);
        this.step = `${parseInt(direction + 1)}` * MISSILE_MOVE_STEP;
        this.axis = DIRECTION_MAP[this.props.r].substr(1);
        const nextCoordinates = this.calculateNextCoordinates(2, this.props.x + 18, this.props.y + 18);
        this.state = {
            x: nextCoordinates.x,
            y: nextCoordinates.y
        };
    }

    componentDidMount() {
        World.registerObject(this.props.id, this.state.x, this.state.y, 5, 5);
        this.loopId = setInterval(() => this.tick(), GAME_FRAMERATE);
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
        clearInterval(this.loopId);
    }

    tick() {
        const newCoords = this.calculateNextCoordinates();
        if (!World.isIntersecting(this.props.id, newCoords.x, newCoords.y, 5, 5)) {
            this.setState(newCoords);
            World.updateObject(this.props.id, this.state.x, this.state.y);
            if ([0, BOARD_WIDTH].indexOf(this.state.x) > -1 || [0, BOARD_HEIGHT].indexOf(this.state.y) > -1) {
                this.props.handleFellMissile(this.props.id);
            }
        } else {
            this.props.handleFellMissile(this.props.id);
        }
    }

    calculateNextCoordinates(steps = 1, x, y) {
        x = x || this.state.x;
        y = y || this.state.y;
        const step = this.step * steps;
        return {
            x: Math.min(BOARD_WIDTH, Math.max(0, this.axis === 'left' ? (x + step) : x)),
            y: Math.min(BOARD_HEIGHT, Math.max(0, this.axis === 'top' ? (y + step) : y))
        };
    }

    render() {
        return (
            <div
                className="missile"
                style={{top: this.state.y, left: this.state.x}}
            />
        );
    }
}

export default Missile;