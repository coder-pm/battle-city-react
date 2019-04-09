import React, {Component} from 'react';
import './Missile.scss';
import {BOARD_HEIGHT, BOARD_WIDTH, MISSILE_MOVE_STEP, MISSILE_MOVE_TICK} from "../../constants";

const DIRECTION_MAP = {
    0: '-top',
    90: '+left',
    180: '+top',
    270: '-left'
};

class Missile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ticks: 1
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), MISSILE_MOVE_TICK);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            ticks: this.state.ticks + 1
        });
        if (this.state.ticks > 100) {
            this.props.handleFellMissile(this.props.id);
        }
    }

    render() {
        const dir = DIRECTION_MAP[this.props.direction].substr(0, 1);
        const axis = DIRECTION_MAP[this.props.direction].substr(1);
        const step = `${parseInt(dir + 1)}` * this.state.ticks * MISSILE_MOVE_STEP;
        let top = this.props.initialY + 18;
        let left = this.props.initialX + 18;
        let styles = {
            top: Math.min(BOARD_HEIGHT, Math.max(0, axis === 'top' ? top + step : top)),
            left: Math.min(BOARD_WIDTH, Math.max(0, axis === 'left' ? left + step : left))
        };
        return (
            <div
                className="missile"
                style={styles}
            />
        );
    }
}

export default Missile;