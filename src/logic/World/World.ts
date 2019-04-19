import {BOARD_HEIGHT} from "../../constants";
import {Collision} from "../../enums/Collision";
import Structure from "../../models/Structure";
import Point from "../../models/Point";

/**
 * Class World - class representing world.
 */
export default class World {
    /**
     * Objects registry.
     */
    protected static readonly REGISTRY: {
        [index: string]: {
            structure: Structure,
            collisions: Array<Collision>
        }
    } = {};

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
     */
    public static registerObject(object: Structure, collision: Collision): void {
        const collisions: Array<Collision> = [];
        if (collision === Collision.BLOCK_ALL) {
            collisions.push(Collision.BLOCK_MOVE, Collision.BLOCK_SHOT);
        } else {
            collisions.push(collision)
        }
        this.REGISTRY[object.id] = {structure: object, collisions: collisions};
    }

    /**
     * Update object position.
     *
     * @param id - object id
     * @param location - new location
     */
    public static updateObject(id: string, location: Point): void {
        this.REGISTRY[id].structure.location = location;
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
     * @param actor - world object definition
     * @param collision - collision type
     */
    public static isIntersecting(actor: Structure, collision: Collision): Array<any> {
        // object position (y axis inversed)
        const tp = {
            l: {x: actor.location.x, y: BOARD_HEIGHT - actor.location.y}, // top left
            r: {
                x: actor.location.x + actor.dimension.width,
                y: BOARD_HEIGHT - actor.location.y - actor.dimension.height
            } // bottom right
        };
        const hits = [];
        for (const oid in this.REGISTRY) {
            if (actor.id !== oid && this.REGISTRY.hasOwnProperty(oid)) {
                const object = this.REGISTRY[oid];
                if (this.COLLISION_MAP[collision].filter(x => object.collisions.includes(x)).length) {
                    // obstacle position (y axis inversed)
                    const loc = object.structure.location;
                    const dim = object.structure.dimension;
                    const op = {
                        l: {x: loc.x, y: BOARD_HEIGHT - loc.y}, // top left
                        r: {x: loc.x + dim.width, y: BOARD_HEIGHT - loc.y - dim.height} // bottom right
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
                        hits.push(object.structure);
                    }
                }
            }
        }
        return hits;
    }
}