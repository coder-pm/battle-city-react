import {OBSTACLE_HEIGHT, OBSTACLE_WIDTH, TANK_MOVE_STEP} from "../../constants";
import {Collision} from "../enums/Collision";
import {TankActor} from "../enums/TankActor";
import World from "../classes/World";
import TankModel from "../models/components/TankModel";
import TankMove from "../models/move/TankMove";

/**
 * Tank move handler.
 *
 * @param tank - tank model
 * @param world - world
 * @param isStuck - stuck state
 * @param activeKey - active key
 */
export const TANK_MOVE_HANDLER = (tank: TankModel, world: World, isStuck: boolean, activeKey: string): TankMove => {
    let move: TankMove = {
        location: tank.location,
        rotation: tank.rotation,
        isStuck: isStuck
    };
    if (activeKey) {
        // perform step
        const predict = TANK_STEP_HANDLER(move, activeKey);

        // intersection check
        if (world.isIntersecting(
            Object.assign({}, tank, {location: predict.location}),
            Collision.BLOCK_MOVE
        ).length === 0) {
            move = predict;
            move.isStuck = false;
            world.updateObject(tank.id, move.location);
        } else {
            move.isStuck = true;
            // just rotate in case of intersection
            // but prevent rotation of stucked AI as it looks like glitch
            if (tank.actor !== TankActor.AI || !move.isStuck) {
                move.rotation = predict.rotation;
            }
        }
    }
    return move;
};

/**
 * Tank step handler.
 *
 * @param move - tank move
 * @param activeKey - active key
 * @param step - step to perform
 */
export const TANK_STEP_HANDLER = (move: TankMove, activeKey: string, step: number = TANK_MOVE_STEP) => {
    let x = move.location.x;
    let y = move.location.y;
    let r = move.rotation;
    let initialDirection = r;
    let correctionAxis = 'x';
    switch (activeKey) {
        case 'ArrowUp':
            y -= step;
            r = 0;
            break;
        case 'ArrowRight':
            x += step;
            r = 90;
            correctionAxis = 'y';
            break;
        case 'ArrowDown':
            y += step;
            r = 180;
            break;
        case 'ArrowLeft':
            x -= step;
            r = 270;
            correctionAxis = 'y';
            break;
        default:
    }
    // move correction (stick to grid)
    if (initialDirection !== r) {
        if (correctionAxis === 'x') {
            x = 3 + (Math.round(x / OBSTACLE_WIDTH) * OBSTACLE_WIDTH);
        } else {
            y = 3 + (Math.round(y / OBSTACLE_HEIGHT) * OBSTACLE_HEIGHT);
        }
    }
    return Object.assign({}, move, {location: {x: x, y: y}, rotation: r});
};