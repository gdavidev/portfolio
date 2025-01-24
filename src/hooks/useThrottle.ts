import {useCallback, useRef} from "react";

type UseThrottleOptions = {
    delay?: number,
    buffered?: boolean
}
type UseThrottleResult = (...args: any[]) => void;

/**
 * Ignores excess calls on a set delay time.
 *
 * @param callback function to be called
 * @param {UseThrottleOptions} options
 * - `delay`: delay in milliseconds. Default is 100
 * - `buffered`: if true, the last time callback was called will wait until
 *      `options.delay` time has ended. Default is true
 */
export default function useThrottle(callback: (...args: any[]) => void, options?: UseThrottleOptions): UseThrottleResult {
    const lastCalled = useRef<number | null>(null);
    const bufferTimeout = useRef<number>();
    const delay: number = options?.delay ?? 100;
    const buffered: boolean = options?.buffered ?? true;

    const dispatchCallback: (...args: any[]) => void =
        useCallback((...args: any[]) => {
            window.clearTimeout(bufferTimeout.current);
            bufferTimeout.current = undefined;
            lastCalled.current = Date.now();
            callback(...args);
        }, [callback]);

    return useCallback((...args: any[]) => {
        const now: number = Date.now();
        const timeSinceLastCalled = now - (lastCalled.current ?? 0);
        const timeRemaining: number = delay - (timeSinceLastCalled);
        const bufferIdle: boolean = bufferTimeout.current === undefined;

        if ((lastCalled.current === null || timeRemaining >= delay) && bufferIdle) {
            dispatchCallback(...args);
        } else if (buffered && bufferIdle) {
            bufferTimeout.current = window.setTimeout(() => {
                dispatchCallback(...args);
            }, timeRemaining);
        }
    }, [dispatchCallback, delay, buffered]);
}