import React, {Component} from 'react';
import './Game.scss';
import Board from "../Board/Board";
import introSound from '../../assets/intro.mp3';
import Sound from 'react-sound'

class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board/>
                <Sound
                    url={introSound}
                    playStatus={Sound.status.PLAYING}
                />
            </div>
        );
    }
}

export default Game;