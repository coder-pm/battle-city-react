import Point from "../../game/models/Point";
import Dimension from "../../game/models/Dimension";

/**
 * Interface ObstaclePropsModel - properties model.
 */
export default interface ObstaclePropsModel {
    id: string;
    type: string;
    location: Point;
    dimension: Dimension;
}