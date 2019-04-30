import './Game.scss';
import React, {Component, ReactNode} from 'react';
import Board from "../Board/Board";
import GameStateModel from "./GameStateModel";
import {GameMode} from "../../game/enums/GameMode";
import MainMenu from "../MainMenu/MainMenu";
import GamePropsModel from "./GamePropsModel";

/**
 * Class Game - game component.
 */
export default class Game extends Component<GamePropsModel, GameStateModel> {
    /**
     * Game constructor.
     *
     * @param props - properties
     */
    constructor(props: GamePropsModel) {
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
                        <Board
                            world={this.props.world}
                            mode={this.state.activeMode}
                            handleStopGame={this.handleStopGame}/>
                        :
                        <MainMenu handleStartGame={this.handleStartGame}/>
                }
            </div>
        );
    }
}