import {OBSTACLE_HEIGHT, OBSTACLE_WIDTH, TANK_HEIGHT, TANK_MOVE_STEP, TANK_WIDTH} from "../../constants";
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
        let x = move.location.x;
        let y = move.location.y;
        let r = move.rotation;
        let initialDirection = r;
        let correctionAxis = 'x';
        switch (activeKey) {
            case 'ArrowUp':
                y -= TANK_MOVE_STEP;
                r = 0;
                break;
            case 'ArrowRight':
                x += TANK_MOVE_STEP;
                r = 90;
                correctionAxis = 'y';
                break;
            case 'ArrowDown':
                y += TANK_MOVE_STEP;
                r = 180;
                break;
            case 'ArrowLeft':
                x -= TANK_MOVE_STEP;
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

        // intersection check
        if (world.isIntersecting({
                id: tank.id,
                location: {
                    x: x,
                    y: y
                },
                dimension: {
                    width: TANK_WIDTH,
                    height: TANK_HEIGHT
                }
            },
            Collision.BLOCK_MOVE
        ).length === 0) {
            move.location = {x: x, y: y};
            move.rotation = r;
            move.isStuck = false;
            world.updateObject(tank.id, move.location);
        } else {
            move.isStuck = true;
            // just rotate in case of intersection
            // but prevent rotation of stucked AI as it looks like glitch
            if (tank.actor !== TankActor.AI || !move.isStuck) {
                move.rotation = r;
            }
        }
    }
    return move;
};