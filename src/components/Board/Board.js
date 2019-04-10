import React, {Component} from 'react';
import './Board.scss';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH} from "../../constants";
import Missile from "../Missile";
import Obstacle from "../Obstacle";
import uuidv4 from 'uuid/v4';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tanks: [
                {id: uuidv4()}
            ],
            obstacles: [
                {id: uuidv4(), x: 200, y: 300},
                {id: uuidv4(), x: 220, y: 300},
                {id: uuidv4(), x: 240, y: 300},
                {id: uuidv4(), x: 260, y: 300},
                {id: uuidv4(), x: 260, y: 320},
                {id: uuidv4(), x: 260, y: 280}
            ],
            missiles: []
        };
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
    }

    handleFireMissile(missile) {
        if (this.state.missiles.filter((m) => m.tankId === missile.tankId).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile)
            })
        }
    }

    handleFellMissile(id) {
        this.setState({
            missiles: this.state.missiles.filter((missile) => missile.id !== id)
        })
    }

    render() {
        return (
            <div
                className="board"
                style={{width: BOARD_WIDTH, height: BOARD_HEIGHT}}
            >
                {
                    this.state.tanks.map((tank) => (
                        <Tank
                            key={tank.id}
                            id={tank.id}
                            handleFireMissile={this.handleFireMissile}
                        />
                    ))
                }
                {
                    this.state.obstacles.map((obstacle) => (
                        <Obstacle
                            key={obstacle.id}
                            id={obstacle.id}
                            x={obstacle.x}
                            y={obstacle.y}
                        />
                    ))
                }
                {
                    this.state.missiles.map((missile) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            x={missile.x}
                            y={missile.y}
                            r={missile.r}
                            handleFellMissile={this.handleFellMissile}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Board;