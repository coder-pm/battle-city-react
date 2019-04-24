import Point from "../../game/models/Point";
import Structure from "../../game/models/Structure";
import World from "../../game/classes/World";

/**
 * Interface MissilePropsModel - properties model.
 */
export default interface MissilePropsModel {
    id: string;
    owner: any;
    location: Point;
    rotation: number;
    world: World;
    handleFellMissile: (id: string, owner: any, objectIds: Array<Structure>) => void;
}