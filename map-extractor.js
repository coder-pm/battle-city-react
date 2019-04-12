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
                            type = 'OBSTACLE_TYPE_METAL';
                            break;
                        case 'forest':
                            type = 'OBSTACLE_TYPE_FOREST';
                            break;
                        case 'water':
                            type = 'OBSTACLE_TYPE_WATER';
                            break;
                        default:
                            type = 'OBSTACLE_TYPE_BRICK';
                            break;
                    }
                    obstacles.push(`{id: uuidv4(), type: ${type}, x: ${j * 24}, y: ${i * 24}}`);
                }
            }
        })
    }
});
console.log(`
import uuidv4 from 'uuid/v4';
import {
    BOARD_HEIGHT,
    BOARD_WIDTH,
    OBSTACLE_TYPE_BRICK,
    OBSTACLE_TYPE_FOREST,
    OBSTACLE_TYPE_METAL,
    OBSTACLE_TYPE_TRANSPARENT,
    OBSTACLE_TYPE_WATER
} from "../constants";

export const MAP_1 = [
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: 0, y: 0, w: BOARD_WIDTH, h: 1},
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: 0, y: 0, w: 1, h: BOARD_HEIGHT},
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: 0, y: BOARD_HEIGHT, w: BOARD_WIDTH, h: 1},
    {id: uuidv4(), type: OBSTACLE_TYPE_TRANSPARENT, x: BOARD_WIDTH, y: 0, w: 1, h: BOARD_HEIGHT},
${obstacles.join(",\n")}
];`);