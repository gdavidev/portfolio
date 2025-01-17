import useProjectsData, {ProjectsData} from "../../../hooks/useProjectsData.ts";
import ProjectCard from "../ProjectCard.tsx";
import Project from "../../../model/Project.ts";
import CardsContainerBase, {CardsContainerBaseProps} from "./CardsContainerBase.tsx";

type ProjectsCardsContainerProps = {
    projectsCategory: keyof ProjectsData
} & Omit<CardsContainerBaseProps, 'containerClassName' | 'children'>;

export default function ProjectsCardsContainer(props: ProjectsCardsContainerProps) {
    const {projects, isProjectsLoading} = useProjectsData();

    return (
        <CardsContainerBase
            title={props.title}
            description={props.description}
            containerClassName='grid grid-cols-1'
        >
            {!isProjectsLoading &&
                projects![props.projectsCategory].map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project}/>
                ))
            }
        </CardsContainerBase>
    );
}