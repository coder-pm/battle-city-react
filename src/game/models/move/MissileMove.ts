import Point from "../Point";
import Structure from "../Structure";

/**
 * Interface MissileMove - missile move model.
 */
export default interface MissileMove {
    location: Point;
    hitObjects: Array<Structure>
}