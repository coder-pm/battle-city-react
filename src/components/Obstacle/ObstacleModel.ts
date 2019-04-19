import {ObstacleType} from "./ObstacleType";
import Structure from "../../models/Structure";

/**
 * Interface ObstacleModel - obstacle model.
 */
export default interface ObstacleModel extends Structure {
    type: ObstacleType;
}