import React, {Component, ReactNode} from 'react';
import Board from "../Board/Board";
import assetSoundIntro from '../../assets/audio/intro.wav';
import './Game.scss';

/**
 * Class Game - game component.
 */
export default class Game extends Component {
    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div className="game">
                <Board/>
                <audio src={assetSoundIntro} autoPlay/>
            </div>
        );
    }
}