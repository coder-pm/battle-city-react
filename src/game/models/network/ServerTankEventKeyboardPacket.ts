import Point from "../Point";

/**
 * Interface ServerTankEventKeyboardPacket - server tank event keyboard packet.
 */
export default interface ServerTankEventKeyboardPacket {
    tankId: string;
    key: string;
    location: Point,
    rotation: number;
}