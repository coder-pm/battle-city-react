import Point from "../../game/models/Point";
import Dimension from "../../game/models/Dimension";
import World from "../../game/classes/World";

/**
 * Interface ObstaclePropsModel - properties model.
 */
export default interface ObstaclePropsModel {
    id: string;
    type: string;
    location: Point;
    dimension: Dimension;
    world: World;
}