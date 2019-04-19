import Structure from "../../models/Structure";

/**
 * Interface TankModel - tank model.
 */
export default interface TankModel extends Structure {
    rotation: number;
    ai: boolean;
}