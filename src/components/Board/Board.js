import React, {Component} from 'react';
import './Board.scss';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH, OBSTACLE_TYPE_METAL, OBSTACLE_TYPE_TRANSPARENT} from "../../constants";
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
                {id: uuidv4(), x: 0, y: 0, r: 90, ai: false},
                {id: uuidv4(), x: 1038, y: 100, r: 270, ai: true},
                {id: uuidv4(), x: 1038, y: 200, r: 270, ai: true},
                {id: uuidv4(), x: 1038, y: 400, r: 270, ai: true},
                {id: uuidv4(), x: 1038, y: 678, r: 0, ai: true}
            ],
            obstacles: MAP_1,
            missiles: [],
            sounds: []
        };
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
        this.spawnTank = this.spawnTank.bind(this);
    }

    handleFireMissile(missile) {
        if (this.state.missiles.filter((m) => m.tank.id === missile.tank.id).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile),
                sounds: this.state.sounds.concat({id: missile.id})
            });
            setTimeout(() => this.setState({
                sounds: this.state.sounds.filter((sound) => sound.id !== missile.id)
            }), 500);
        }
    }

    handleFellMissile(id, originTank = null, hitObjects = null) {
        const newState = {};
        if (hitObjects.length) {
            newState.missiles = this.state.missiles.filter(
                (missile) => !(
                    missile.id === id ||
                    hitObjects.filter((o) => o.id === missile.id).length > 0
                )
            );
            newState.obstacles = this.state.obstacles.filter(
                (obstacle) => !(
                    hitObjects.filter((o) => o.id === obstacle.id).length > 0 &&
                    [OBSTACLE_TYPE_METAL, OBSTACLE_TYPE_TRANSPARENT].indexOf(obstacle.type) === -1
                )
            );
            newState.tanks = this.state.tanks.filter(
                (tank) => {
                    if (
                        // this tank wasn't hit
                        hitObjects.filter((o) => o.id === tank.id).length === 0 ||
                        // ignore if ai hit ai
                        tank.ai === originTank.ai ||
                        // ignore if we hit self
                        tank.id === originTank.id
                    ) {
                        return true;
                    }
                    setTimeout(() => this.spawnTank(tank), 2500);
                    return false;
                }
            );
        }
        this.setState(newState);
    }

    spawnTank(tank) {
        this.setState({
            tanks: this.state.tanks.concat(tank)
        });
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
                            ai={tank.ai}
                            x={tank.x}
                            y={tank.y}
                            r={tank.r}
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
                            w={obstacle.w}
                            h={obstacle.h}
                        />
                    ))
                }
                {
                    this.state.missiles.map((missile) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            tank={missile.tank}
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