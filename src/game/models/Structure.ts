import Point from "./Point";
import Dimension from "./Dimension";

/**
 * Interface Structure - structure model.
 */
export default interface Structure {
    id: string;
    location: Point;
    dimension: Dimension;
}