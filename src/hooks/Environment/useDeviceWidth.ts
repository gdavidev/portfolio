import { useState, useEffect, useCallback } from 'react';

/**
 * Enum representing common device width breakpoints.
 */
export enum DeviceWidthBreakpoints {
    XS, // Extra Small
    SM, // Small
    MD, // Medium
    LG, // Large
    XL, // Extra Large
    XXL, // Extra Extra Large
}

/**
 * The return type of the `useDeviceWidth` hook.
 */
type UseDeviceWidthResult = {
    width: number;
    breakpoint: DeviceWidthBreakpoints;
}

/**
 * A hook that tracks the device width and returns the width and its corresponding breakpoint.
 *
 * @returns {UseDeviceWidthResult} An object containing:
 * - `width`: The current width of the viewport in pixels.
 * - `breakpoint`: The current device width breakpoint.
 *
 * @example
 * const { width, breakpoint } = useDeviceWidth();
 *
 * return (
 *    breakpoint >= DeviceWidthBreakpoints.LG ?
 *          <LargeComponent /> :
 *          <SmallComponent />
 * );
 */
export default function useDeviceWidth(): UseDeviceWidthResult {
    const [width, setWidth] = useState(window.innerWidth);
    const [breakpoint, setBreakpoint] = useState<DeviceWidthBreakpoints>(DeviceWidthToBreakpoint(window.innerWidth))

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth)
        setBreakpoint(DeviceWidthToBreakpoint(window.innerWidth))
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width: width,
        breakpoint: breakpoint
    };
};

/**
 * Maps a device width in pixels to a corresponding breakpoint.
 *
 * @param {number} width - The width of the device in pixels.
 * @returns {DeviceWidthBreakpoints} The corresponding breakpoint.
 */
function DeviceWidthToBreakpoint(width: number): DeviceWidthBreakpoints {
    switch (true) {
        case width >= 1536: return DeviceWidthBreakpoints.XXL;
        case width >= 1280: return DeviceWidthBreakpoints.XL;
        case width >= 1024: return DeviceWidthBreakpoints.LG;
        case width >= 768: return DeviceWidthBreakpoints.MD;
        case width >= 640: return DeviceWidthBreakpoints.SM;
        default: return DeviceWidthBreakpoints.XS;
    }
}