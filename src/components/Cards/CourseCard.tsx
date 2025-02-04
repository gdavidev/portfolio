import Course from "../../model/Course.ts";
import ProgressBar from "../ProgressBar.tsx";
import {CardLinkImage} from "./CardBase.tsx";

type CardProgressProps = {
    course: Course;
}

export default function CourseCard(props: CardProgressProps) {
    const course = props.course;

    return (
        <div className='grid place-items-start grid-rows-[8rem_1fr] bg-card-background rounded-md p-4'>
            <CardLinkImage className='w-56' src={course.img_path} link={course.link} alt={course.title} />
            <div className='flex flex-col gap-y-2 justify-between size-full'>
                <div>
                    <h3 className='font-rubik font-bold text-primary text-2xl'>{course.title}</h3>
                    <p className='text-gray-500 text-sm -mt-1'>{course.institution}</p>
                </div>
                <p className='self-start h-full'>{course.desc}</p>
                <ProgressBar currentPercentage={course.progress}/>
            </div>
        </div>
    );
}