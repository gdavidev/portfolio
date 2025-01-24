import {useCallback, useRef} from "react";

type UseDebounceOptions = {
    callback: (...args: any[]) => void,
    wait: number
}

export default function useDebounce(options: UseDebounceOptions) {
    let timeout = useRef<number | undefined>();

    return useCallback((...args: any[]) => {
        window.clearTimeout(timeout.current);

        timeout.current = window.setTimeout(() => {
            options.callback(...args);
        }, options.wait);
    }, []);
}