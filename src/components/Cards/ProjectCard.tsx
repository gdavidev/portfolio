import {ReactElement} from "react";
import Project from "../../model/Project.ts";
import TagContainer from "../TagContainer.tsx";

type ProjectCardProps = {
    project: Project;
}

enum CardContentState {
    STABLE,
    IN_PROGRESS,
    CANCELLED,
}

export default function ProjectCard(props: ProjectCardProps): ReactElement {
    const project = props.project;

    return (
        <div className="big_card">
            <div className="card_thumbnail">
                <a href={ project.link }><img src={ project.img_path } alt={ project.alt }/></a>
            </div>
            <div className="card_info">
                <div className='card_info'>
                    <h3 className="card_title">{ project.title }</h3>
                    <h4 className="card_sub_title">{ project.sub_title }</h4>
                    <TagContainer source={project.tags} />
                    <p className="card_desc">{ project.desc }</p>
                    <p className="project_state">
                        State: <span style={{ color: getStateColor( project.state ), fontWeight: 'bold' }}>{ project.state }</span>
                    </p>
                </div>
                <a href={ project.link } className="access_link">{ project.link }</a>
            </div>
        </div>
    );
}

function getStateColor(state: CardContentState | string): string {
    const targetState: CardContentState = typeof state === 'string' ? parseCardContentState(state) : state;

    switch (targetState) {
        case CardContentState.STABLE: return 'lightgreen';
        case CardContentState.IN_PROGRESS: return 'orange';
        case CardContentState.CANCELLED: return 'red';
    }
}

function parseCardContentState(state: string): CardContentState {
    switch (state) {
        case 'Stable': return CardContentState.STABLE;
        case 'In Progress': return CardContentState.IN_PROGRESS;
        case 'Cancelled': return CardContentState.CANCELLED;
        default: return CardContentState.STABLE;
    }
}

