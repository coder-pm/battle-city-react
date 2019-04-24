import World from "../../game/classes/World";

/**
 * Interface BoardPropsModel - properties model.
 */
export default interface BoardPropsModel {
    world: World;
    handleStopGame: () => void;
}