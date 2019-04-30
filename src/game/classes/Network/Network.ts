import io from "socket.io-client";
import {NetworkPacket} from "../../enums/NetworkPacket";
import {GAME_SERVER_ADDRESS, GAME_SERVER_PORT} from "../../../constants";
import ServerHandshakingPacket from "../../models/network/ServerHandshakingPacket";
import {HandshakingStatus} from "../../enums/HandshakingStatus";

/**
 * Class Network - class responsible for networking in multiplayer mode.
 */
export default class Network {
    /**
     * Properties.
     */
    protected static socket: SocketIOClient.Socket | null = null;

    /**
     * Connect to server.
     *
     * @param callback - callback executed after connecting and handshaking
     */
    public static connect(callback: Function): void {

        this.socket = io.connect(`${GAME_SERVER_ADDRESS}:${GAME_SERVER_PORT}`);
        this.socket.on(NetworkPacket.CONNECT_ERROR, () => {
            callback({
                clientId: null,
                status: HandshakingStatus.OFFLINE
            });
        });
        this.socket.on(NetworkPacket.CONNECT, () => {
            // @ts-ignore
            this.socket.on(NetworkPacket.GAME_HANDSHAKING, (packet: ServerHandshakingPacket) => {
                callback(packet);
            });
        });
    }

    /**
     * Disconnect from server.
     */
    public static disconnect(): void {
        if (this.socket !== null) {
            this.socket.disconnect();
            this.socket.close();
            this.socket = null;
        }
    }

    /**
     * Returns socket, might be null if not connected.
     *
     * @param packet - packet
     * @param payload - packet payload
     */
    public static emit(packet: NetworkPacket, payload: any): boolean {
        if (this.socket !== null) {
            this.socket.emit(packet, payload);
            return true;
        }
        return false;
    }

    /**
     * Listen to specific events.
     *
     * @param packet - packet
     * @param callback - callback to execute
     */
    public static listen(packet: NetworkPacket, callback: Function): boolean {
        if (this.socket !== null) {
            this.socket.on(packet, callback);
            return true;
        }
        return false;
    }
}