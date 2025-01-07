import useJsonResource from "./useJsonResource.ts";
import Project from "../model/Project.ts";

type UseProjectsDataResult = {
    courses: ProjectsData | null;
    isProjectsLoading: boolean;
}

export type ProjectsData = {
    courses: Project[],
    main: Project[],
    other: Project[]
}

export default function useProjectsData(): UseProjectsDataResult {
    const { data, isLoading } = useJsonResource<ProjectsData>('./dist/json/projects.json');

    return {
        courses: data,
        isProjectsLoading: isLoading
    }
}