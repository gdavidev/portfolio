import Course from "../../model/Course.ts";
import ProgressBar from "../ProgressBar.tsx";

type CardProgressProps = {
    course: Course;
}

export default function CourseCard(props: CardProgressProps) {
    const course = props.course;

    return (
        <div className='card flex flex-col gap-y-1'>
            <div className='grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-[14rem_1fr] gap-x-2'>
                <a className='w-56' href={course.link} target='_blank'>
                    <img className='object-cover' src={course.img_path} alt={course.alt}/>
                </a>
                <div>
                    <h3 className='card-title'>{course.title}</h3>
                    <p >{course.desc}</p>
                </div>
            </div>
            <ProgressBar currentPercentage={course.progress}/>
        </div>
    );
}