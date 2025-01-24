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
        <div className="card grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-[30rem_1fr] gap-x-2">
            <a className="w-full min-h-64 overflow-hidden" href={project.link}>
                <img className='object-cover h-64 mx-auto' src={project.img_path} alt={project.alt}/>
            </a>
            <div className="flex flex-col justify-between h-full">
                <div className=''>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='flex flex-wrap gap-y-1 gap-x-2 items-baseline'>
                            <h3 className="card-title !-mb-2">{project.title}</h3>
                            <h4 className="text-primary font-rubik text-md">{project.sub_title}</h4>
                        </div>
                        <div className="flex flex-nowrap">
                            <span>State: </span>
                            <span
                                className='ms-1 font-bold whitespace-nowrap'
                                style={{color: getStateColor(project.state)}}>
                                    {project.state}
                            </span>
                        </div>
                    </div>
                    <TagContainer className='mb-4' source={project.tags}/>
                    <p className="">{project.desc}</p>
                </div>
                {project.link &&
                    <a target='_blank'
                       href={project.link}
                       className="hover:underline cursor-pointer text-primary-light mt-2">
                        {project.link}
                    </a>
                }
            </div>
        </div>
    );
}

function getStateColor(state: CardContentState | string): string {
    const targetState: CardContentState = typeof state === 'string' ? parseCardContentState(state) : state;

    switch (targetState) {
        case CardContentState.STABLE:
            return 'lightgreen';
        case CardContentState.IN_PROGRESS:
            return 'orange';
        case CardContentState.CANCELLED:
            return 'red';
    }
}

function parseCardContentState(state: string): CardContentState {
    switch (state) {
        case 'Stable':
            return CardContentState.STABLE;
        case 'In Progress':
            return CardContentState.IN_PROGRESS;
        case 'Cancelled':
            return CardContentState.CANCELLED;
        default:
            return CardContentState.STABLE;
    }
}

