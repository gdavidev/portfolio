import useJsonResource from "./useJsonResource.ts";
import Course from "../model/Course.ts";

type UseCoursesDataResult = {
    courses: CoursesData | null;
    isCoursesLoading: boolean;
}

export type CoursesData = {
    courses: Course[],
    main: Course[],
    other: Course[]
}

export default function useCoursesData(): UseCoursesDataResult {
    const { data, isLoading } = useJsonResource<CoursesData>('COURSES', '/data/courses.json');

    return {
        courses: data,
        isCoursesLoading: isLoading
    }
}