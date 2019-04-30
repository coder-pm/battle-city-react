import World from "../../game/classes/World";
import {GameMode} from "../../game/enums/GameMode";

/**
 * Interface BoardPropsModel - properties model.
 */
export default interface BoardPropsModel {
    world: World;
    mode: GameMode;
    handleStopGame: () => void;
}