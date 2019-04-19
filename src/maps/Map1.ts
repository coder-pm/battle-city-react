import uuidv4 from 'uuid/v4';
import {BOARD_HEIGHT, BOARD_WIDTH, OBSTACLE_HEIGHT, OBSTACLE_WIDTH} from "../constants";
import {ObstacleType} from "../components/Obstacle/ObstacleType";
import ObstacleModel from "../components/Obstacle/ObstacleModel";

export const MAP_1: Array<ObstacleModel> = [
    {
        id: uuidv4(),
        type: ObstacleType.TRANSPARENT,
        location: {x: 0, y: 0},
        dimension: {width: BOARD_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.TRANSPARENT,
        location: {x: 0, y: 0},
        dimension: {width: OBSTACLE_WIDTH, height: BOARD_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.TRANSPARENT,
        location: {x: 0, y: BOARD_HEIGHT - OBSTACLE_HEIGHT},
        dimension: {width: BOARD_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.TRANSPARENT,
        location: {x: BOARD_WIDTH - OBSTACLE_WIDTH, y: 0},
        dimension: {width: OBSTACLE_WIDTH, height: BOARD_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 216, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 240, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 264, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 288, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 312, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 336, y: 24},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 48},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 456, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 480, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 816, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 864, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 888, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 912, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 936, y: 72},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 456, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 480, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 816, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 864, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 888, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 912, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 936, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 96},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 120},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 96, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 120, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 144, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 168, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 192, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 336, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 360, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 384, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 408, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 720, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 744, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 144},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 24, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 48, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 96, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 120, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 144, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 168, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 192, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 240, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 264, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 288, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 336, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 360, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 384, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 408, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 720, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 744, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1008, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1056, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1080, y: 168},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 24, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 48, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 96, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 120, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 144, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 168, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 192, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 672, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 696, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 720, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 744, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 816, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 840, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 864, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 1032, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 1056, y: 192},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 24, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 48, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 96, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 120, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 144, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 168, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 192, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 816, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 840, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 864, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 216},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 432, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 816, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 840, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 864, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 240},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 432, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 816, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 840, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 864, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 264},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 96, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 120, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 168, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 192, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 216, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 240, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 384, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 432, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 456, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 480, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 288},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 96, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 120, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 144, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 168, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 192, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 216, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 240, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 264, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 288, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 384, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 408, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 432, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 504, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 528, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 552, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 576, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 600, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 624, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 648, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 312},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 384, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 408, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 432, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 504, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 672, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 696, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 720, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 744, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 768, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 864, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 888, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 912, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 936, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 960, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 984, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 1008, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 1032, y: 336},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 384, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 408, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 432, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 504, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 672, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 696, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 720, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 744, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 768, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 360},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 240, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 384, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 456, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 480, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 504, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 528, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 384},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 240, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 384, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 456, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 480, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 408},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 96, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 120, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 816, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 864, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 888, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 912, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 936, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 984, y: 432},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 216, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 240, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 264, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 288, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 312, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 336, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 360, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 384, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 408, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 432, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 456, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 480, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 504, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 456},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 72, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 480},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 816, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 504},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 624, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 816, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 864, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 888, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 912, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 936, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 960, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 984, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 1008, y: 528},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 816, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 552},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 144, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 216, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 240, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 384, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 816, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 864, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 888, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 912, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 936, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 984, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1008, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 576},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 216, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 240, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 264, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 288, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 312, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 336, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 360, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 384, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 408, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 432, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 456, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.WATER,
        location: {x: 480, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 504, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 528, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 552, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 720, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 744, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 768, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 816, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 864, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 888, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 912, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 936, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 984, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1008, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 1032, y: 600},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 336, y: 624},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 360, y: 624},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 384, y: 624},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 408, y: 624},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 624},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 336, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 648},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.METAL,
        location: {x: 336, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 576, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 600, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 624, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 648, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 672, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 696, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 792, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 816, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 840, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.BRICK,
        location: {x: 960, y: 672},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 96, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 120, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 144, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 168, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 192, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 216, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 240, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 264, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 288, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 312, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 336, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 360, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 384, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 408, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 432, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 456, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 480, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 504, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    },
    {
        id: uuidv4(),
        type: ObstacleType.FOREST,
        location: {x: 528, y: 720},
        dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}
    }
];