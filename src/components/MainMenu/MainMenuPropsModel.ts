import {GameMode} from "../../game/enums/GameMode";

/**
 * Interface MainMenuPropsModel - properties model.
 */
export default interface MainMenuPropsModel {
    message: string | null;
    handleStartGame: (mode: GameMode) => void;
}