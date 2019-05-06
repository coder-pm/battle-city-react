import MissileMove from "../models/move/MissileMove";
import {MISSILE_MOVE_STEP} from "../../constants";
import {Collision} from "../enums/Collision";
import MissileModel from "../models/components/MissileModel";
import World from "../classes/World";
import Point from "../models/Point";

/**
 * Missile move handler.
 */
export const MISSILE_MOVE_HANDLER = (missile: MissileModel, world: World, direction: number, axis: string): MissileMove => {
    let move: MissileMove = {
        location: missile.location,
        hitObjects: []
    };

    // calculate new coordinates and check if missile may move there
    const step = direction * MISSILE_MOVE_STEP;
    const newCoords = MISSILE_NEXT_COORDINATES(axis, step, missile.location);
    const hitObjects = world.isIntersecting(
        Object.assign({}, missile, {location: newCoords}),
        Collision.BLOCK_SHOT
    );

    // handle missile fell if it hits other object or continue moving
    if (hitObjects.length > 0) {
        move.hitObjects = hitObjects;
    } else {
        move.location = newCoords;
        world.updateObject(missile.id, move.location);
    }
    return move;
};

/**
 * Calculate missile next coordinates.
 *
 * @param axis - axis (x or y)
 * @param step - how far missile will move
 * @param location - initial position
 */
export const MISSILE_NEXT_COORDINATES = (axis: string, step: number, location: Point): Point => {
    return {
        x: axis === 'x' ? (location.x + step) : location.x,
        y: axis === 'y' ? (location.y + step) : location.y
    };
};

/**
 * Missile direction map.
 */
export const MISSILE_DIRECTION_MAP: { [index: number]: string } = {
    0: '-y',
    90: '+x',
    180: '+y',
    270: '-x'
};