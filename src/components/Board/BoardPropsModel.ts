import World from "../../game/classes/World";
import {GameMode} from "../../game/enums/GameMode";
import {GameStopReason} from "../../game/enums/GameStopReason";

/**
 * Interface BoardPropsModel - properties model.
 */
export default interface BoardPropsModel {
    world: World;
    mode: GameMode;
    handleStopGame: (reason: GameStopReason) => void;
}