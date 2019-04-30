import './Game.scss';
import React, {Component, ReactNode} from 'react';
import Board from "../Board/Board";
import GameStateModel from "./GameStateModel";
import {GameMode} from "../../game/enums/GameMode";
import MainMenu from "../MainMenu/MainMenu";
import GamePropsModel from "./GamePropsModel";
import {GameStopReason} from "../../game/enums/GameStopReason";

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
            message: null
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
     *
     * @param reason - stop reason
     */
    protected handleStopGame(reason: GameStopReason) {
        let message;
        switch (reason) {
            case GameStopReason.SERVER_FULL:
                message = 'Server full';
                break;
            case GameStopReason.SERVER_OFFLINE:
                message = 'Server offline';
                break;
            default:
                message = null;

        }
        this.setState({
            activeMode: null,
            message: message
        });
        window.setTimeout(() => {
            this.setState({message: null});
        }, 2000);
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
                        <MainMenu handleStartGame={this.handleStartGame} message={this.state.message}/>
                }
            </div>
        );
    }
}