import React, {Component} from 'react';
import './Board.scss';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH, OBSTACLE_TYPE_METAL} from "../../constants";
import Missile from "../Missile";
import Obstacle from "../Obstacle";
import uuidv4 from 'uuid/v4';
import Sound from "react-sound";
import shotSound from "../../assets/shot.wav";
import {MAP_1} from "../../maps/Map1";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tanks: [
                {id: uuidv4()}
            ],
            obstacles: MAP_1,
            missiles: [],
            sounds: []
        };
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
    }

    handleFireMissile(missile) {
        if (this.state.missiles.filter((m) => m.tankId === missile.tankId).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile),
                sounds: this.state.sounds.concat({id: missile.id})
            });
            setTimeout(() => this.setState({
                sounds: this.state.sounds.filter((sound) => sound.id !== missile.id)
            }), 500);
        }
    }

    handleFellMissile(id, hitObjectId = null) {
        const newState = {
            missiles: this.state.missiles.filter((missile) => missile.id !== id)
        };
        if (hitObjectId) {
            newState.obstacles = this.state.obstacles.filter(
                (obstacle) => !(obstacle.id === hitObjectId && obstacle.type !== OBSTACLE_TYPE_METAL)
            );
        }
        this.setState(newState);
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
                            type={obstacle.type}
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
                {
                    this.state.sounds.map((sound) => (
                        <Sound
                            key={sound.id}
                            url={shotSound}
                            playStatus={Sound.status.PLAYING}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Board;