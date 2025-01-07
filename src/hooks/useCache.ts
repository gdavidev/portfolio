import {CacheContext} from "../context/CacheProvider.tsx";
import {useContext} from "react";

type UseCacheResult = {
    getCachedItem: (key: string) => any | undefined
    setCachedItem: (key: string, value: any) => void
}

export default function useCache(): UseCacheResult {
    const cacheContext = useContext(CacheContext);
    if (!cacheContext) {
        throw new Error("useCache must be used within CacheContext");
    }

    return {
        getCachedItem: cacheContext.getCachedItem,
        setCachedItem: cacheContext.setCachedItem,
    }
}