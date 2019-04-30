import {HandshakingStatus} from "../../enums/HandshakingStatus";

/**
 * Interface ServerHandshakingPacket - server handshaking packet.
 */
export default interface ServerHandshakingPacket {
    clientId: string | null;
    status: HandshakingStatus
}