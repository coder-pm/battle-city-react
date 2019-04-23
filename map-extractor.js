const obstacles = [];
document.querySelectorAll('tr').forEach((row, i) => {
    if (i > 1 && i < 32) {
        i = i - 2;
        row.querySelectorAll('td').forEach((cell, j) => {
            if (j > 0 && j < 46) {
                j = j - 1;
                const obstacle = cell.querySelector('img');
                if (obstacle) {
                    let type = obstacle.getAttribute('title');
                    switch (type) {
                        case 'metal':
                            type = 'ObstacleType.METAL';
                            break;
                        case 'forest':
                            type = 'ObstacleType.FOREST';
                            break;
                        case 'water':
                            type = 'ObstacleType.WATER';
                            break;
                        default:
                            type = 'ObstacleType.BRICK';
                            break;
                    }
                    obstacles.push(`{id: uuidv4(), type: ${type}, location: {x: ${24 + (j * 24)}, y: ${24 + (i * 24)}}, dimension: {width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}}`);
                }
            }
        })
    }
});
console.log(`import uuidv4 from 'uuid/v4';
import {BOARD_HEIGHT, BOARD_WIDTH, OBSTACLE_HEIGHT, OBSTACLE_WIDTH} from "../../constants";
import {ObstacleType} from "../../components/Obstacle/ObstacleType";
import ObstacleModel from "../models/components/ObstacleModel";

export const MAP_1: Array<ObstacleModel> = [
    {id: uuidv4(), type: ObstacleType.TRANSPARENT, location: {x: 0, y: 0}, dimension: {width: BOARD_WIDTH, height: OBSTACLE_HEIGHT}},
    {id: uuidv4(), type: ObstacleType.TRANSPARENT, location: {x: 0, y: 0}, dimension: {width: OBSTACLE_WIDTH, height: BOARD_HEIGHT}},
    {id: uuidv4(), type: ObstacleType.TRANSPARENT, location: {x: 0, y: BOARD_HEIGHT - OBSTACLE_HEIGHT}, dimension: {width: BOARD_WIDTH, height: OBSTACLE_HEIGHT}},
    {id: uuidv4(), type: ObstacleType.TRANSPARENT, location: {x: BOARD_WIDTH - OBSTACLE_WIDTH, y: 0}, dimension: {width: OBSTACLE_WIDTH, height: BOARD_HEIGHT}},
${obstacles.join(",\n")}
];`);