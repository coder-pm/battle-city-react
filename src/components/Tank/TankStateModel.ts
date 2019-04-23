import Point from "../../game/models/Point";

/**
 * Interface TankStateModel - state model.
 */
export default interface TankStateModel {
    location: Point;
    rotation: number;
}