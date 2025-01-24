import {useCallback, useEffect, useState} from "react";
import useThrottle from "../useThrottle.ts";

// Options for the `useScrollPosition` hook
type UseScrollPositionOptions = {
    step?: number;
}

// Function type for setting scroll position
type SetScrollPositionFunction = (value: number, animation: ScrollBehavior) => void;

// The return type of the `useScrollPosition` hook.
type UseScrollPositionResult = {
    setScrollPosition: SetScrollPositionFunction
    scrollY: number;
}

/**
 * Custom hook to track and "snap" the user's scroll position to a multiple of a given step size.
 *
 * @example const {scrollY, setScrollPosition} = useScrollPosition({step: 500});
 * @param options - Configuration options for the hook.
 * @param options.step - The step size for snapping scroll position. Must be greater than 0. Default is 100.
 * @returns {UseScrollPositionResult} An object containing:
 *   - `setScrollPosition`: A function to programmatically set the scroll position.
 *   - `scrollY`: The current snapped scroll position.
 */
export default function useScrollPosition(options?: UseScrollPositionOptions): UseScrollPositionResult {
    const [scrollY, setScrollY] = useState<number>(0);
    const step: number = options?.step || 100;

    const updateScrolled = useThrottle(() => {
        const ratio: number = Math.floor(window.scrollY / step);
        setScrollY(step * ratio);
    }, {
        delay: 200,
        buffered: true
    });

    useEffect(() => {
        if (step <= 0) {
            console.error("useScrollPosition: 'step' must be a positive number.");
            return;
        }

        window.addEventListener('scroll', updateScrolled);
        return (): void => window.removeEventListener('scroll', updateScrolled);
    }, [step, updateScrolled]);

    const setScrollPosition: SetScrollPositionFunction =
        useCallback((value: number, animation: ScrollBehavior) => {
            window.scrollTo({top: value, behavior: animation})
        }, []);

    return {
        setScrollPosition: setScrollPosition,
        scrollY: scrollY,
    }
}