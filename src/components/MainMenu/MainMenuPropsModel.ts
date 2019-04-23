import {GameMode} from "../../game/enums/GameMode";

/**
 * Interface MainMenuPropsModel - properties model.
 */
export default interface MainMenuPropsModel {
    handleStartGame: (mode: GameMode) => void;
}