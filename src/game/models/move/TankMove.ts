import Point from "../Point";

/**
 * Interface TankMove - tank move model.
 */
export default interface TankMove {
    location: Point;
    rotation: number;
    isStuck: boolean;
}