import Structure from "../../models/Structure";

/**
 * Interface MissileModel - missile model.
 */
export default interface MissileModel extends Structure {
    owner: any;
    rotation: number;
}