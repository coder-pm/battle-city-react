import {BOARD_HEIGHT, COLLISION_BLOCK_ALL, COLLISION_BLOCK_MOVE, COLLISION_BLOCK_SHOT} from "../../constants";

const OBJECTS = {};
const COLLISION_MAP = {
    [COLLISION_BLOCK_ALL]: [COLLISION_BLOCK_MOVE, COLLISION_BLOCK_SHOT],
    [COLLISION_BLOCK_MOVE]: [COLLISION_BLOCK_MOVE],
    [COLLISION_BLOCK_SHOT]: [COLLISION_BLOCK_SHOT]
};

class World {
    static registerObject(object, collision, x, y, w, h) {
        collision = collision === COLLISION_BLOCK_ALL ? [COLLISION_BLOCK_MOVE, COLLISION_BLOCK_SHOT] : [collision];
        OBJECTS[object.id] = {def: object, collision: collision, x: x, y: y, w: w, h: h};
    }

    static updateObject(id, x, y) {
        OBJECTS[id].x = x;
        OBJECTS[id].y = y;
    }

    static removeObject(id) {
        delete OBJECTS[id];
    }

    static isIntersecting(id, collision, x, y, w, h) {
        const tp = {
            l: {x: x, y: BOARD_HEIGHT - y}, // top left
            r: {x: x + w, y: BOARD_HEIGHT - y - h} // bottom right
        };
        const hits = [];
        for (const oid in OBJECTS) {
            if (id !== oid && OBJECTS.hasOwnProperty(oid)) {
                const object = OBJECTS[oid];
                if (COLLISION_MAP[collision].filter(x => object.collision.includes(x)).length) {
                    const op = {
                        l: {x: object.x, y: BOARD_HEIGHT - object.y}, // top left
                        r: {x: object.x + object.w, y: BOARD_HEIGHT - object.y - object.h} // bottom right
                    };
                    let intersecting = true;
                    // aside check
                    if (tp.l.x > op.r.x || op.l.x > tp.r.x) {
                        intersecting = false;
                    }
                    // top/bottom check
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

export default World;