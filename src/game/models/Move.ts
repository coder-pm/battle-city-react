import Point from "./Point";

/**
 * Interface Move - move model.
 */
export default interface Move {
    location: Point;
    rotation: number;
    isStuck: boolean;
}