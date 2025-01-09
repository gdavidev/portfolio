import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconName, IconPrefix} from "@fortawesome/free-solid-svg-icons";
import Tag from "../model/Tag.ts";

type TagProps = {
    tag: Tag
}

export default function TagChip(props: TagProps) {
    const tag: Tag = props.tag;

    return (
        <div className="tag" style={{
            color: tag.text_color,
            backgroundColor: tag.bg_color,
            display: "inline-flex",
            alignItems: 'center',
            gap: 4,
        }}>
            <FontAwesomeIcon icon={[ tag.icon.collection as IconPrefix, tag.icon.name as IconName ]} />
            <p>{ tag.name }</p>
        </div>
    );
}