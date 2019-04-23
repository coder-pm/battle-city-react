import './Game.scss';
import React, {Component, ReactNode} from 'react';
import Board from "../Board/Board";
import assetSoundIntro from '../../assets/audio/intro.wav';
import Stateless from "../../game/models/Stateless";

/**
 * Class Game - game component.
 */
export default class Game extends Component<Stateless, Stateless> {
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