/// <reference types="node" />
import net from 'net';
import { CreateListenerOptions, DialOptions, symbol, Transport } from '@libp2p/interface-transport';
import type { AbortOptions, Multiaddr } from '@multiformats/multiaddr';
import type { Connection } from '@libp2p/interface-connection';
export interface TCPOptions {
    /**
     * An optional number in ms that is used as an inactivity timeout after which the socket will be closed
     */
    inboundSocketInactivityTimeout?: number;
    /**
     * An optional number in ms that is used as an inactivity timeout after which the socket will be closed
     */
    outboundSocketInactivityTimeout?: number;
    /**
     * When closing a socket, wait this long for it to close gracefully before it is closed more forcibly
     */
    socketCloseTimeout?: number;
    /**
     * Node's public ip
     */
    publicIp?: string;
}
/**
 * Expose a subset of net.connect options
 */
export interface TCPSocketOptions extends AbortOptions {
    noDelay?: boolean;
    keepAlive?: boolean;
    keepAliveInitialDelay?: number;
    allowHalfOpen?: boolean;
}
export interface TCPDialOptions extends DialOptions, TCPSocketOptions {
}
export interface TCPCreateListenerOptions extends CreateListenerOptions, TCPSocketOptions {
}
export declare class TCP implements Transport {
    private readonly opts;
    constructor(options?: TCPOptions);
    get [symbol](): true;
    get [Symbol.toStringTag](): string;
    dial(ma: Multiaddr, options: TCPDialOptions): Promise<Connection>;
    _connect(ma: Multiaddr, options: TCPDialOptions): Promise<net.Socket>;
    /**
     * Creates a TCP listener. The provided `handler` function will be called
     * anytime a new incoming Connection has been successfully upgraded via
     * `upgrader.upgradeInbound`.
     */
    createListener(options: TCPCreateListenerOptions): import("@libp2p/interface-transport").Listener;
    /**
     * Takes a list of `Multiaddr`s and returns only valid TCP addresses
     */
    filter(multiaddrs: Multiaddr[]): Multiaddr[];
}
//# sourceMappingURL=index.d.ts.map