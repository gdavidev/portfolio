import Course from "../../../model/Course.ts";
import CourseCard from "../CourseCard.tsx";
import useCoursesData, {CoursesData} from "../../../hooks/useCoursesData.ts";
import CardsContainerBase, {CardsContainerBaseProps} from "./CardsContainerBase.tsx";

type CourseCardsContainerProps = {
    coursesCategory: keyof CoursesData
} & Omit<CardsContainerBaseProps, 'containerClassName' | 'children'>;

export default function CourseCardsContainer(props: CourseCardsContainerProps) {
    const {courses, isCoursesLoading} = useCoursesData();

    return (
        <CardsContainerBase
            title={props.title}
            description={props.description}
            containerClassName='grid grid-cols-1 2xl:grid-cols-2'
        >
            {!isCoursesLoading &&
                courses![props.coursesCategory].map(
                    (course: Course, i: number) => (
                        <CourseCard key={i} course={course}/>
                    ))
            }
        </CardsContainerBase>

    );
}