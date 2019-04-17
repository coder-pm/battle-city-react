import {BOARD_HEIGHT} from "../../constants";
import {Collision} from "../../enums/Collision";

/**
 * Class World - class representing world.
 */
export default class World {
    /**
     * Objects registry.
     */
    protected static readonly REGISTRY: any = {};

    /**
     * Collision map.
     */
    protected static readonly COLLISION_MAP = {
        [Collision.BLOCK_ALL]: [Collision.BLOCK_MOVE, Collision.BLOCK_SHOT],
        [Collision.BLOCK_MOVE]: [Collision.BLOCK_MOVE],
        [Collision.BLOCK_SHOT]: [Collision.BLOCK_SHOT],
        [Collision.BLOCK_NONE]: []
    };

    /**
     * Register object in world.
     *
     * @param object - world object definition
     * @param collision - object collision type
     * @param x - object initial x position
     * @param y - object initial y position
     * @param w - object width
     * @param h - object height
     */
    public static registerObject(object: any, collision: string, x: number, y: number, w: number, h: number): void {
        const collisions: Array<string> = [];
        if (collision === Collision.BLOCK_ALL) {
            collisions.push(Collision.BLOCK_MOVE, Collision.BLOCK_SHOT);
        } else {
            collisions.push(collision)
        }
        this.REGISTRY[object.id] = {def: object, collisions: collisions, x: x, y: y, w: w, h: h};
    }

    /**
     * Update object position.
     *
     * @param id - object id
     * @param x - object new position x
     * @param y - object new position y
     */
    public static updateObject(id: string, x: number, y: number): void {
        this.REGISTRY[id].x = x;
        this.REGISTRY[id].y = y;
    }

    /**
     * Remove object from world.
     *
     * @param id - object id
     */
    public static removeObject(id: string): void {
        delete this.REGISTRY[id];
    }

    /**
     * Check if object is intersecting with anything else in the world using given collision type.
     *
     * @param id - object to check against other objects
     * @param collision - collision type
     * @param x - object x position
     * @param y - object y position
     * @param w - object width
     * @param h - object height
     */
    public static isIntersecting(id: string, collision: Collision, x: number, y: number, w: number, h: number): Array<any> {
        // object position (y axis inversed)
        const tp = {
            l: {x: x, y: BOARD_HEIGHT - y}, // top left
            r: {x: x + w, y: BOARD_HEIGHT - y - h} // bottom right
        };
        const hits = [];
        for (const oid in this.REGISTRY) {
            if (id !== oid && this.REGISTRY.hasOwnProperty(oid)) {
                const object = this.REGISTRY[oid];
                if (this.COLLISION_MAP[collision].filter(x => object.collisions.includes(x)).length) {
                    // obstacle position (y axis inversed)
                    const op = {
                        l: {x: object.x, y: BOARD_HEIGHT - object.y}, // top left
                        r: {x: object.x + object.w, y: BOARD_HEIGHT - object.y - object.h} // bottom right
                    };
                    let intersecting = true;
                    // aside collision check
                    if (tp.l.x > op.r.x || op.l.x > tp.r.x) {
                        intersecting = false;
                    }
                    // top/bottom collision check
                    if (tp.l.y < op.r.y || op.l.y < tp.r.y) {
                        intersecting = false;
                    }
                    if (intersecting) {
                        hits.push(object.def);
                    }
                }
            }
        }
        return hits;
    }
}