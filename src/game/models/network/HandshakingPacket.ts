import {HandshakingStatus} from "../../enums/HandshakingStatus";

/**
 * Interface HandshakingPacket - handshaking packet.
 */
export default interface HandshakingPacket {
    clientId: string | null;
    status: HandshakingStatus
}