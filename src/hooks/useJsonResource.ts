import {useEffect, useState} from "react";
import useCache from "./useCache.ts";

type UseJsonResourceOptions<T> = {
    onSuccess?: (data: T) => void;
}

type UseJsonResourceResult<T> = {
    data: T | null;
    isLoading: boolean;
}

export default function useJsonResource<T>(key:string, path:string, options?: UseJsonResourceOptions<T>): UseJsonResourceResult<T> {
    const { getCachedItem, setCachedItem } = useCache();
    const [ isLoading, setLoading ] = useState<boolean>(true);
    const [ data, setData ] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        const cachedContent: T | undefined = getCachedItem(key);

        if (cachedContent) {
            setLoading(false);
            setData(cachedContent);
        } else {
            fetch(path)
                .then((resp: Response): Promise<any> => resp.json())
                .then(async (data: any): Promise<void> => {
                    setLoading(false);
                    setData(data);
                    setCachedItem(key, data);
                    options?.onSuccess?.(data);
                });
        }
    }, []);

    return {
        data: data,
        isLoading: isLoading
    }
}