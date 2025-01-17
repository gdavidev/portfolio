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
        <div className="card project-card">
            <div className="">
                <a href={ project.link }><img src={ project.img_path } alt={ project.alt }/></a>
            </div>
            <div className="">
                <div className=''>
                    <div className='flex flex-col lg:flex-row lg:gap-x-2 lg:items-baseline'>
                        <h3 className="card-title">{ project.title }</h3>
                        <h4 className="text-primary font-rubik text-md">{ project.sub_title }</h4>
                    </div>
                    <TagContainer source={project.tags} />
                    <p className="">{ project.desc }</p>
                    <p className="">
                        State: <span style={{ color: getStateColor( project.state ), fontWeight: 'bold' }}>{ project.state }</span>
                    </p>
                </div>
                { project.link &&
                    <a href={ project.link } className="access_link">{ project.link }</a>
                }
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

