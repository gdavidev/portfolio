import useJsonResource from "./useJsonResource.ts";
import Tag from "../model/Tag.ts";

type UseTagsDataResult = {
    tags: TagsData | null;
    isTagsLoading: boolean;
}

type TagsData = {
    main: Tag[],
    other: Tag[]
}

export default function useTagsData(): UseTagsDataResult {
    const { data, isLoading } = useJsonResource<TagsData>('./dist/json/tags.json');

    return {
        tags: data,
        isTagsLoading: isLoading
    }
}