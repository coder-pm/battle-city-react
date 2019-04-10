import React, {Component} from 'react';
import './Tank.scss';
import {BOARD_HEIGHT, BOARD_WIDTH, GAME_FRAMERATE, TANK_HEIGHT, TANK_MOVE_STEP, TANK_WIDTH} from "../../constants";
import uuidv4 from 'uuid/v4';
import World from "../../logic/World";

const AVAILABLE_KEYBOARD_CODES = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];

class Tank extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            r: 0
        };
        this.activeKey = null;
        this.handleKeyboard = this.handleKeyboard.bind(this);
    }

    componentDidMount() {
        World.registerObject(this.props.id, this.state.x, this.state.y, TANK_WIDTH, TANK_HEIGHT);
        window.addEventListener('keydown', this.handleKeyboard);
        window.addEventListener('keyup', this.handleKeyboard);
        this.loopId = setInterval(() => this.tick(), GAME_FRAMERATE);
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
        window.removeEventListener('keydown', this.handleKeyboard);
        window.removeEventListener('keyup', this.handleKeyboard);
        clearInterval(this.loopId);
    }

    tick() {
        if (this.activeKey) {
            let x = this.state.x;
            let y = this.state.y;
            let r = this.state.r;
            switch (this.activeKey) {
                case 'ArrowUp':
                    y -= TANK_MOVE_STEP;
                    r = 0;
                    break;
                case 'ArrowRight':
                    x += TANK_MOVE_STEP;
                    r = 90;
                    break;
                case 'ArrowDown':
                    y += TANK_MOVE_STEP;
                    r = 180;
                    break;
                case 'ArrowLeft':
                    x -= TANK_MOVE_STEP;
                    r = 270;
                    break;
            }
            if (!World.isIntersecting(this.props.id, x, y, TANK_WIDTH, TANK_HEIGHT)) {
                this.setState({
                    x: Math.min(BOARD_WIDTH - TANK_WIDTH, Math.max(0, x)),
                    y: Math.min(BOARD_HEIGHT - TANK_HEIGHT, Math.max(0, y)),
                    r: r
                });
                World.updateObject(this.props.id, this.state.x, this.state.y);
            }
        }
    }

    handleKeyboard(e) {
        if (AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            if (e.code === 'Space') {
                this.props.handleFireMissile({
                    id: uuidv4(),
                    tankId: this.props.id,
                    x: this.state.x,
                    y: this.state.y,
                    r: this.state.r
                });
            } else {
                if (e.type === 'keydown') {
                    this.activeKey = e.code;
                } else if (this.activeKey === e.code) {
                    this.activeKey = null;
                }
            }
        }
    }

    render() {
        return (
            <div
                className="tank"
                style={{
                    transform: `rotate(${this.state.r}deg)`,
                    top: `${this.state.y}px`,
                    left: `${this.state.x}px`,
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }}
            >
            </div>
        );
    }
}

export default Tank;