import Point from "../../game/models/Point";
import MissileModel from "../../game/models/components/MissileModel";
import World from "../../game/classes/World";
import {TankActor} from "../../game/enums/TankActor";

/**
 * Interface TankPropsModel - properties model.
 */
export default interface TankPropsModel {
    id: string;
    actor: TankActor;
    location: Point;
    rotation: number;
    world: World;
    handleFireMissile: (missile: MissileModel) => void;
}