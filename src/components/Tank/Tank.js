import React, {Component} from 'react';
import './Tank.scss';
import {BOARD_HEIGHT, BOARD_WIDTH, TANK_HEIGHT, TANK_MOVE_STEP, TANK_WIDTH} from "../../constants";

const AVAILABLE_KEYBOARD_CODES = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];

class Tank extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: {
                x: 0,
                y: 0,
                r: 0
            }
        };
        this.handleKeyboard = this.handleKeyboard.bind(this);
    }

    handleKeyboard(e) {
        if (AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            let x = this.state.position.x;
            let y = this.state.position.y;
            let r = this.state.position.r;
            switch (e.code) {
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
                case 'Space':
                    this.props.handleFireMissile({
                        id: new Date().getTime(),
                        initialX: x,
                        initialY: y,
                        direction: r
                    });
                    break;
            }
            this.setState({
                position: {
                    x: Math.min(BOARD_WIDTH - TANK_WIDTH, Math.max(0, x)),
                    y: Math.min(BOARD_HEIGHT - TANK_HEIGHT, Math.max(0, y)),
                    r: r
                }
            })
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyboard)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyboard)
    }

    render() {
        return (
            <div
                className="tank"
                style={{
                    transform: `rotate(${this.state.position.r}deg)`,
                    top: `${this.state.position.y}px`,
                    left: `${this.state.position.x}px`,
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }}
            >
            </div>
        );
    }
}

export default Tank;