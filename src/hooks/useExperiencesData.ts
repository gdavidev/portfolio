import useJsonResource from "./useJsonResource.ts";
import Experience from "../model/Experience.ts";

type UseExperiencesDataResult = {
    experiences: ExperiencesData | null;
    isExperiencesLoading: boolean;
}

export type ExperiencesData = {
    main: Experience[],
    other: Experience[]
}

export default function useExperiencesData(): UseExperiencesDataResult {
    const { data, isLoading } = useJsonResource<ExperiencesData>('EXPERIENCES', '/data/experience.json');

    return {
        experiences: data,
        isExperiencesLoading: isLoading
    }
}