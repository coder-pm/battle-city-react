import Structure from "../Structure";
import {ObstacleType} from "../../enums/ObstacleType";

/**
 * Interface ObstacleModel - obstacle model.
 */
export default interface ObstacleModel extends Structure {
    type: ObstacleType;
}