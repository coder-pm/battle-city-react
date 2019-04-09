import React, {Component} from 'react';
import './Board.scss';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH} from "../../constants";
import Missile from "../Missile";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            missiles: []
        };
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
    }

    handleFireMissile(missile) {
        this.setState({
            missiles: this.state.missiles.concat(missile)
        })
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
                <Tank handleFireMissile={this.handleFireMissile}/>
                {
                    this.state.missiles.map((missile) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            initialX={missile.initialX}
                            initialY={missile.initialY}
                            direction={missile.direction}
                            handleFellMissile={this.handleFellMissile}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Board;