import useJsonResource from "./useJsonResource.ts";
import Tag from "../model/Tag.ts";

type UseTagsDataOptions = {
    onSuccess?: (data: TagsData) => void;
}


type UseTagsDataResult = {
    tags: TagsData | null;
    isTagsLoading: boolean;
}

export type TagsData = {
    tags: Tag[],
}

export default function useTagsData(options?: UseTagsDataOptions): UseTagsDataResult {
    const { data, isLoading } = useJsonResource<TagsData>('TAGS', '/src/data/tags.json', {
        onSuccess: options?.onSuccess
    });

    return {
        tags: data,
        isTagsLoading: isLoading
    }
}