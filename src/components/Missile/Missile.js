import React, {Component} from 'react';
import './Missile.scss';
import {
    BOARD_HEIGHT,
    BOARD_WIDTH,
    COLLISION_BLOCK_ALL,
    COLLISION_BLOCK_SHOT,
    GAME_FRAMERATE,
    MISSILE_HEIGHT,
    MISSILE_MOVE_STEP,
    MISSILE_WIDTH,
    TANK_WIDTH
} from "../../constants";
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
        const operator = `${parseInt(direction + 1)}`;
        this.step = operator * MISSILE_MOVE_STEP;
        this.axis = DIRECTION_MAP[this.props.r].substr(1);
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

    componentDidMount() {
        World.registerObject(
            this.props.id,
            COLLISION_BLOCK_ALL,
            this.state.x,
            this.state.y,
            MISSILE_WIDTH,
            MISSILE_HEIGHT
        );
        this.loopId = setInterval(() => this.tick(), GAME_FRAMERATE);
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
        clearInterval(this.loopId);
    }

    tick() {
        const newCoords = this.calculateNextCoordinates();
        const objectIds = World.isIntersecting(
            this.props.id,
            COLLISION_BLOCK_SHOT,
            newCoords.x,
            newCoords.y,
            MISSILE_WIDTH,
            MISSILE_HEIGHT
        );
        if (objectIds.length > 0) {
            this.props.handleFellMissile(this.props.id, objectIds);
        } else {
            this.setState(newCoords);
            World.updateObject(this.props.id, this.state.x, this.state.y);
            if ([0, BOARD_WIDTH].indexOf(this.state.x) > -1 || [0, BOARD_HEIGHT].indexOf(this.state.y) > -1) {
                this.props.handleFellMissile(this.props.id);
            }
        }
    }

    calculateNextCoordinates(step = this.step, x, y) {
        x = x || this.state.x;
        y = y || this.state.y;
        return {
            x: Math.min(BOARD_WIDTH, Math.max(0, this.axis === 'left' ? (x + step) : x)),
            y: Math.min(BOARD_HEIGHT, Math.max(0, this.axis === 'top' ? (y + step) : y))
        };
    }

    render() {
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

export default Missile;