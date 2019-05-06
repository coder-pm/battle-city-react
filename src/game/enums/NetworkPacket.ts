/**
 * Enum NetworkPacket - network packet.
 */
export enum NetworkPacket {
    CONNECT = 'connect',
    CONNECT_ERROR = 'connect_error',
    DISCONNECT = 'disconnect',
    GAME_HANDSHAKING = 'game.handshaking',
    GAME_PING = 'game.ping',
    GAME_PONG = 'game.pong',
    BOARD_STATE_OBSTACLES = 'board.state.obstacles',
    BOARD_STATE_TANKS = 'board.state.tanks',
    BOARD_STATE_MISSILES = 'board.state.missiles',
    TANK_EVENT_KEYBOARD = 'tank.event.keyboard',
    TANK_EVENT_FIRE = 'tank.event.fire'
}