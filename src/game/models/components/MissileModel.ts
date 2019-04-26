import Structure from "../Structure";

/**
 * Interface MissileModel - missile model.
 */
export default interface MissileModel extends Structure {
    tankId: string;
    rotation: number;
}