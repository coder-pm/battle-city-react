import './MainMenu.scss';
import React, {Component, ReactNode} from 'react';
import {GameMode} from "../../game/enums/GameMode";
import MainMenuStateModel from "./MainMenuStateModel";
import MainMenuPropsModel from "./MainMenuPropsModel";

/**
 * Class MainMenu - main menu component.
 */
export default class MainMenu extends Component<MainMenuPropsModel, MainMenuStateModel> {
    /**
     * Available keyboard codes.
     */
    protected static readonly AVAILABLE_KEYBOARD_CODES: Array<string> = [
        'ArrowUp', 'ArrowDown', 'Enter'
    ];

    /**
     * MainMenu constructor.
     *
     * @param props - properties
     */
    constructor(props: MainMenuPropsModel) {
        super(props);

        this.state = {
            selectedMode: GameMode.SINGLE_PLAYER,
        };

        this.handleKeyboard = this.handleKeyboard.bind(this);
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        window.addEventListener('keydown', this.handleKeyboard);
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        window.removeEventListener('keydown', this.handleKeyboard);
    }

    /**
     * Keyboard handler.
     *
     * @param e - keyboard event
     */
    protected handleKeyboard(e: KeyboardEvent): void {
        if (MainMenu.AVAILABLE_KEYBOARD_CODES.indexOf(e.code) > -1) {
            if (e.code === 'Enter') {
                this.props.handleStartGame(this.state.selectedMode);
            } else if (['ArrowUp', 'ArrowDown'].indexOf(e.code) > -1) {
                this.setState({
                    selectedMode: this.state.selectedMode === GameMode.SINGLE_PLAYER ?
                        GameMode.ONLINE_MULTIPLAYER : GameMode.SINGLE_PLAYER
                })
            }
        }
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div className="main-menu">
                <ul>
                    <li className={this.state.selectedMode === GameMode.SINGLE_PLAYER ? 'selected' : ''}>
                        Single Player
                    </li>
                    <li className={this.state.selectedMode === GameMode.ONLINE_MULTIPLAYER ? 'selected' : ''}>
                        Online Multiplayer
                    </li>
                </ul>
            </div>
        );
    }
}