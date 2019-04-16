import uuidv4 from 'uuid/v4';
import {
    BOARD_HEIGHT,
    BOARD_WIDTH,
    OBSTACLE_HEIGHT,
    OBSTACLE_TYPE_BRICK,
    OBSTACLE_TYPE_FOREST,
    OBSTACLE_TYPE_METAL,
    OBSTACLE_TYPE_TRANSPARENT,
    OBSTACLE_TYPE_WATER,
    OBSTACLE_WIDTH
} from "../constants";

export const MAP_1 = [
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: 0, y: 0, w: BOARD_WIDTH, h: OBSTACLE_HEIGHT},
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: 0, y: 0, w: OBSTACLE_WIDTH, h: BOARD_HEIGHT},
    {
        id: uuidv4(),
        type: OBSTACLE_TYPE_TRANSPARENT,
        x: 0,
        y: BOARD_HEIGHT - OBSTACLE_HEIGHT,
        w: BOARD_WIDTH,
        h: OBSTACLE_HEIGHT
    },
    {
        id: uuidv4(),
        type: OBSTACLE_TYPE_TRANSPARENT,
        x: BOARD_WIDTH - OBSTACLE_WIDTH,
        y: 0,
        w: OBSTACLE_WIDTH,
        h: BOARD_HEIGHT
    },
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 216, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 240, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 264, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 288, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 312, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 336, y: 24},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 48},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 456, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 480, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 816, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 864, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 888, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 912, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 936, y: 72},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 456, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 480, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 816, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 864, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 888, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 912, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 936, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 96},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 120},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 96, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 120, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 144, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 168, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 192, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 336, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 360, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 384, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 408, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 720, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 744, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 144},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 24, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 48, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 96, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 120, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 144, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 168, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 192, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 240, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 264, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 288, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 336, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 360, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 384, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 408, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 720, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 744, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1008, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1056, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1080, y: 168},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 24, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 48, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 96, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 120, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 144, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 168, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 192, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 672, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 696, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 720, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 744, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 816, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 840, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 864, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 1032, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 1056, y: 192},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 24, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 48, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 96, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 120, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 144, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 168, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 192, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 816, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 840, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 864, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 216},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 432, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 816, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 840, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 864, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 240},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 432, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 816, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 840, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 864, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 264},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 96, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 120, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 168, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 192, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 216, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 240, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 384, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 432, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 456, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 480, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 288},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 96, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 120, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 144, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 168, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 192, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 216, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 240, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 264, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 288, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 384, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 408, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 432, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 504, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 528, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 552, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 576, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 600, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 624, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 648, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 312},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 384, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 408, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 432, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 504, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 672, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 696, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 720, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 744, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 768, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 864, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 888, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 912, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 936, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 960, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 984, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 1008, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 1032, y: 336},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 384, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 408, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 432, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 504, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 672, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 696, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 720, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 744, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 768, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 360},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 240, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 384, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 456, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 480, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 504, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 528, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 384},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 240, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 384, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 456, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 480, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 408},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 96, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 120, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 816, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 864, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 888, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 912, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 936, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 984, y: 432},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 216, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 240, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 264, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 288, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 312, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 336, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 360, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 384, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 408, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 432, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 456, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 480, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 504, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 456},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 72, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 480},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 816, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 504},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 624, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 816, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 864, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 888, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 912, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 936, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 960, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 984, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 1008, y: 528},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 816, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 552},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 144, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 216, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 240, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 384, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 816, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 864, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 888, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 912, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 936, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 984, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1008, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 576},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 216, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 240, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 264, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 288, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 312, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 336, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 360, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 384, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 408, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 432, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 456, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_WATER, x: 480, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 504, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 528, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 552, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 720, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 744, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 768, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 816, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 864, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 888, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 912, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 936, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 984, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1008, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 1032, y: 600},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 336, y: 624},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 360, y: 624},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 384, y: 624},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 408, y: 624},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 624},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 336, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 648},
    {id: uuidv4(), type: OBSTACLE_TYPE_METAL, x: 336, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 576, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 600, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 624, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 648, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 672, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 696, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 792, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 816, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 840, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_BRICK, x: 960, y: 672},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 96, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 120, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 144, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 168, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 192, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 216, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 240, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 264, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 288, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 312, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 336, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 360, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 384, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 408, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 432, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 456, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 480, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 504, y: 720},
    {id: uuidv4(), type: OBSTACLE_TYPE_FOREST, x: 528, y: 720}
];