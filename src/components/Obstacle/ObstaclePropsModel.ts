import Point from "../../models/Point";
import Dimension from "../../models/Dimension";

/**
 * Interface ObstaclePropsModel - properties model.
 */
export default interface ObstaclePropsModel {
    id: string;
    type: string;
    location: Point;
    dimension: Dimension;
}