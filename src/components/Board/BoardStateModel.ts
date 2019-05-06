import MissileModel from "../../game/models/components/MissileModel";
import Sound from "../../game/models/Sound";
import TankModel from "../../game/models/components/TankModel";
import ObstacleModel from "../../game/models/components/ObstacleModel";

/**
 * Interface BoardStateModel - state model.
 */
export default interface BoardStateModel {
    tanks: Array<TankModel>;
    obstacles: Array<ObstacleModel>;
    missiles: Array<MissileModel>;
    sounds: Array<Sound>;
    latency: number
}