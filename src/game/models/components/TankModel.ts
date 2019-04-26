import Structure from "../Structure";
import {TankActor} from "../../enums/TankActor";

/**
 * Interface TankModel - tank model.
 */
export default interface TankModel extends Structure {
    rotation: number;
    actor: TankActor;
}