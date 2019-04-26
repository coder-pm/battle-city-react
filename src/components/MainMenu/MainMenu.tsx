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
        this.handleTouch = this.handleTouch.bind(this);
    }

    /**
     * Method called once after creating component.
     */
    public componentDidMount(): void {
        window.addEventListener('keydown', this.handleKeyboard);
        window.addEventListener('touchstart', this.handleTouch);
    }

    /**
     * Method called once after component removal.
     */
    public componentWillUnmount(): void {
        window.removeEventListener('keydown', this.handleKeyboard);
        window.removeEventListener('touchstart', this.handleTouch);
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
                    selectedMode: GameMode.SINGLE_PLAYER
                })
            }
        }
    }

    /**
     * Touch handler.
     *
     * @param e - touch event
     */
    protected handleTouch(e: TouchEvent): void {
        if (e.target) {
            const target = e.target as HTMLElement;
            const mode: GameMode | null = target.getAttribute('data-mode') as GameMode;
            if (!target.classList.contains('disabled') && mode === GameMode.SINGLE_PLAYER) {
                this.props.handleStartGame(mode);
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
                    <li data-mode={GameMode.SINGLE_PLAYER}
                        className={this.state.selectedMode === GameMode.SINGLE_PLAYER ? 'selected' : ''}>
                        Single Player
                    </li>
                    <li data-mode={GameMode.ONLINE_MULTIPLAYER}
                        className={this.state.selectedMode === GameMode.ONLINE_MULTIPLAYER ? 'selected' : 'disabled'}>
                        Online Multiplayer
                    </li>
                </ul>
            </div>
        );
    }
}