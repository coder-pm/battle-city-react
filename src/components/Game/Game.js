import React, {Component} from 'react';
import './Game.scss';
import Board from "../Board/Board";

class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board/>
            </div>
        );
    }
}

export default Game;