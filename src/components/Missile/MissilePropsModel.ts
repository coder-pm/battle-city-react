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
    world: World;
    handleFellMissile: (id: string, tankId: string, objectIds: Array<Structure>) => void;
}