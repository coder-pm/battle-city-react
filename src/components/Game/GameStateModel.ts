import {GameMode} from "../../game/enums/GameMode";

/**
 * Interface GameStateModel - state model.
 */
export default interface GameStateModel {
    activeMode: GameMode | null
}