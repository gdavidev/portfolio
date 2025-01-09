import TagChip from './TagChip.tsx';
import useTagsData, {TagsData} from "../hooks/useTagsData.ts";

type TagContainerProps = {
    source: string[]
}

export default function TagContainer(props: TagContainerProps) {
    const {tags} = useTagsData();

    return (
        <div className='tags_container'>
            {tags !== null &&
                renderTags(props.source, tags)
            }
        </div>
    );
}

function renderTags(tagNames: string[], source: TagsData) {
    const tagsArr: JSX.Element[] = [];
    tagNames.forEach(tagName => {
        const tag = source.tags.find(tag => tag.name === tagName)
        if (tag !== undefined) {
            tagsArr.push( <TagChip key={tagsArr.length} tag={tag}/> );
        }
    });

    return tagsArr;
}