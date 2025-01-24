import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconName, IconPrefix} from "@fortawesome/free-solid-svg-icons";
import Tag from "../model/Tag.ts";

type TagProps = {
    tag: Tag
}

export default function TagChip(props: TagProps) {
    const tag: Tag = props.tag;

    return (
        <div
            className="inline-flex items-center gap-x-2 py-0.5 px-4 rounded-full"
            style={{ color: tag.text_color, backgroundColor: tag.bg_color }}>
                <FontAwesomeIcon icon={[ tag.icon.collection as IconPrefix, tag.icon.name as IconName ]} />
                <p>{ tag.name }</p>
        </div>
    );
}