import useJsonResource from "./useJsonResource.ts";
import Experience from "../model/Experience.ts";

type UseExperiencesDataResult = {
    experiences: ExperiencesData | null;
    isExperiencesLoading: boolean;
}

type ExperiencesData = {
    main: Experience[],
    other: Experience[]
}

export default function useExperiencesData(): UseExperiencesDataResult {
    const { data, isLoading } = useJsonResource<ExperiencesData>('./dist/json/experience.json');

    return {
        experiences: data,
        isExperiencesLoading: isLoading
    }
}