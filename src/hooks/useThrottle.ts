import {useCallback, useRef} from "react";

type UseThrottleOptions = {
    callback: (...args: any[]) => void,
    delay: number,
    buffered?: boolean
}
type UseThrottleResult = (...args: any[]) => void;

/**
 * Ignores excess calls on a set <code>options.delay</code> value
 *
 * @param options
 */
export default function useThrottle(options: UseThrottleOptions): UseThrottleResult {
    const lastCalled = useRef<number | null>(null);
    const bufferTimeout = useRef<number>();

    const dispatchCallback: (...args: any[]) => void =
        useCallback((...args: any[]) => {
            window.clearTimeout(bufferTimeout.current);
            bufferTimeout.current = undefined;
            lastCalled.current = Date.now();
            options.callback(...args);
        }, [...Object.values(options)])

    return useCallback((...args: any[]) => {
        const now: number = Date.now();
        const timeSinceLastCalled = now - (lastCalled.current ?? 0);
        const timeRemaining: number = options.delay - (now - timeSinceLastCalled);
        const bufferIdle: boolean = bufferTimeout.current === undefined;

        if ((lastCalled.current === null || timeRemaining >= options.delay) && bufferIdle) {
            dispatchCallback(...args);
        } else if (options.buffered && bufferIdle) {
            bufferTimeout.current = window.setTimeout(() => {
                dispatchCallback(...args);
            }, timeRemaining);
        }
    }, [...Object.values(options)]);
}