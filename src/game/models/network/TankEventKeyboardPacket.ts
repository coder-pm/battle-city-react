import Point from "../Point";

/**
 * Interface TankEventKeyboardPacket - tank event keyboard packet.
 */
export default interface TankEventKeyboardPacket {
    tankId: string;
    key: string;
    location: Point,
    rotation: number;
}