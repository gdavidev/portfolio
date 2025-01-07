import {useEffect, useState} from "react";

type UseJsonResourceOptions<T> = {
    onSuccess?: (data: T) => void;
}

type UseJsonResourceResult<T> = {
    data: T | null;
    isLoading: boolean;
}

export default function useJsonResource<T>(path:string, options?: UseJsonResourceOptions<T>): UseJsonResourceResult<T> {
    const [ isLoading, setLoading ] = useState<boolean>(true);
    const [ data, setData ] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);

        fetch(path)
            .then((resp: Response): Promise<any> => resp.json())
            .then(async (data: any): Promise<void> => {
                setLoading(false);
                setData(data);
                options?.onSuccess?.(data);
            });
    }, []);

    return {
        data: data,
        isLoading: isLoading
    }
}