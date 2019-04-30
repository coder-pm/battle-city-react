import Point from "../../game/models/Point";
import Structure from "../../game/models/Structure";
import World from "../../game/classes/World";

/**
 * Interface MissilePropsModel - properties model.
 */
export default interface MissilePropsModel {
    id: string;
    tankId: string;
    location: Point;
    rotation: number;
    direction: number;
    axis: string;
    world: World;
    handleFellMissile: (id: string, tankId: string, hitObjects: Array<Structure>) => void;
}