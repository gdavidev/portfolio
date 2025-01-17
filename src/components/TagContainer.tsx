import TagChip from './TagChip.tsx';
import useTagsData, {TagsData} from "../hooks/useTagsData.ts";
import {ReactNode} from "react";

type TagContainerProps = {
    source: string[]
}

export default function TagContainer(props: TagContainerProps) {
    const {tags} = useTagsData();

    return (
        <div className='flex flex-wrap gap-x-1 gap-y-0.5'>
            {tags !== null && renderTags(props.source, tags) }
        </div>
    );
}

function renderTags(tagNames: string[], source: TagsData) {
    const tagsArr: ReactNode[] = [];
    tagNames.forEach(tagName => {
        const tag = source.tags.find(tag => tag.name === tagName)
        if (tag !== undefined) {
            tagsArr.push( <TagChip key={tagsArr.length} tag={tag}/> );
        }
    });

    return tagsArr;
}