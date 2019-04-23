import Point from "../../game/models/Point";
import MissileModel from "../../game/models/components/MissileModel";

/**
 * Interface TankPropsModel - properties model.
 */
export default interface TankPropsModel {
    id: string;
    ai: boolean;
    location: Point;
    rotation: number;
    handleFireMissile: (missile: MissileModel) => void;
}