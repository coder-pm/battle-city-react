import MissileModel from "../Missile/MissileModel";
import Sound from "../../models/Sound";
import TankModel from "../Tank/TankModel";
import ObstacleModel from "../Obstacle/ObstacleModel";

/**
 * Interface BoardStateModel - state model.
 */
export default interface BoardStateModel {
    tanks: Array<TankModel>;
    obstacles: Array<ObstacleModel>;
    missiles: Array<MissileModel>;
    sounds: Array<Sound>;
}