import Point from "../../models/Point";
import MissileModel from "../Missile/MissileModel";

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