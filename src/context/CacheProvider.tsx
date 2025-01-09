import {Context, createContext, PropsWithChildren, useCallback, useState} from "react";

type CachedItem = {
    id: string;
    data: any;
}

type CacheProviderAttributes = {
    cache: CachedItem[],
    getCachedItem: (key: string) => any | undefined
    setCachedItem: (key: string, value: any) => void
}

export const CacheContext: Context<CacheProviderAttributes> = createContext<CacheProviderAttributes>({
    cache: [],
    getCachedItem: () => undefined,
    setCachedItem: () => undefined,
});

export default function CacheProvider(props: PropsWithChildren) {
    const [ cache, setCache ] = useState<CachedItem[]>([]);

    const getCachedItem = useCallback((id: string) => {
        const foundItem: CachedItem | undefined = cache.find(item => item.id === id);
        if (foundItem) {
            return foundItem.data;
        }
        return undefined;
    }, [cache]);

    const setCachedItem = useCallback((id: string, value: any) => {
        setCache((cachedItems: CachedItem[]) => {
            const newItem: CachedItem = {
                id: id,
                data: value
            }
            const existingIndex =
                cachedItems.findIndex((cachedItem: CachedItem) => cachedItem.id === newItem.id);

            if (existingIndex > -1) {
                const updatedCache = [...cachedItems];
                updatedCache[existingIndex] = { id: id, data: value };
                return updatedCache;
            }
            return [...cachedItems, { id: id, data: value }];
        });
    }, [cache]);

    return (
        <CacheContext.Provider value={{
            cache: cache,
            getCachedItem: getCachedItem,
            setCachedItem: setCachedItem,
        }}>
            { props.children }
        </CacheContext.Provider>
    );



}