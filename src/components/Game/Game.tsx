import './Game.scss';
import React, {Component, ReactNode} from 'react';
import Board from "../Board/Board";
import Stateless from "../../game/models/Stateless";
import GameStateModel from "./GameStateModel";
import {GameMode} from "../../game/enums/GameMode";
import MainMenu from "../MainMenu/MainMenu";

/**
 * Class Game - game component.
 */
export default class Game extends Component<Stateless, GameStateModel> {
    /**
     * Game constructor.
     *
     * @param props - properties
     */
    constructor(props: Stateless) {
        super(props);

        this.state = {
            activeMode: null,
        };
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleStopGame = this.handleStopGame.bind(this);
    }

    /**
     * Start game handler.
     *
     * @param mode - selected mode
     */
    protected handleStartGame(mode: GameMode) {
        this.setState({
            activeMode: mode
        })
    }

    /**
     * Stop game handler.
     */
    protected handleStopGame() {
        this.setState({
            activeMode: null
        })
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div className="game">
                {
                    this.state.activeMode ?
                        <Board handleStopGame={this.handleStopGame}/>
                        :
                        <MainMenu handleStartGame={this.handleStartGame}/>
                }
            </div>
        );
    }
}