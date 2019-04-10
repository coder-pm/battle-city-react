import {BOARD_HEIGHT} from "../../constants";

const OBJECTS = {};

class World {
    static registerObject(id, x, y, w, h) {
        OBJECTS[id] = {x: x, y: y, w: w, h: h};
    }

    static updateObject(id, x, y) {
        OBJECTS[id].x = x;
        OBJECTS[id].y = y;
    }

    static removeObject(id) {
        delete OBJECTS[id];
    }

    static isIntersecting(id, x, y, w, h) {
        const tp = {
            l: {x: x, y: BOARD_HEIGHT - y}, // top left
            r: {x: x + w, y: BOARD_HEIGHT - y - h} // bottom right
        };
        for (const oid in OBJECTS) {
            if (id !== oid && OBJECTS.hasOwnProperty(oid)) {
                const op = {
                    l: {x: OBJECTS[oid].x, y: BOARD_HEIGHT - OBJECTS[oid].y}, // top left
                    r: {x: OBJECTS[oid].x + OBJECTS[oid].w, y: BOARD_HEIGHT - OBJECTS[oid].y - OBJECTS[oid].h} // bottom right
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
                    return intersecting;
                }
            }
        }
        return false;
    }
}

export default World;