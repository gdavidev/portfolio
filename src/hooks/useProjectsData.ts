import useJsonResource from "./useJsonResource.ts";
import Project from "../model/Project.ts";

type UseProjectsDataResult = {
    projects: ProjectsData | null;
    isProjectsLoading: boolean;
}

export type ProjectsData = {
    projects: Project[],
}

export default function useProjectsData(): UseProjectsDataResult {
    const { data, isLoading } = useJsonResource<ProjectsData>('PROJECTS', '/portfolio/data/projects.json');

    return {
        projects: data,
        isProjectsLoading: isLoading
    }
}