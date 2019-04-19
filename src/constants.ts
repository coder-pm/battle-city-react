export const GAME_FRAMERATE: number = Math.floor(1000 / 60);
export const BOARD_WIDTH: number = 1080 + (2 * 24);
export const BOARD_HEIGHT: number = 720 + (2 * 24);
export const TANK_WIDTH: number = 42;
export const TANK_HEIGHT: number = 42;
export const TANK_MOVE_STEP: number = Math.floor(GAME_FRAMERATE / 5);
export const MISSILE_WIDTH: number = 6;
export const MISSILE_HEIGHT: number = 6;
export const MISSILE_MOVE_STEP: number = Math.floor(GAME_FRAMERATE / 2);
export const MISSILE_THROTTLE_TIME: number = 300;
export const OBSTACLE_WIDTH: number = 24;
export const OBSTACLE_HEIGHT: number = 24;