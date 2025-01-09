import Course from "../../model/Course.ts";

type CardProgressProps = {
    course: Course;
}

export default function CourseCard(props: CardProgressProps) {
    const course = props.course;

    return (
        <div className='card'>
            <a href={ course.link } target='_blank'>
                <img src={ course.img_path } alt={ course.alt } />
            </a>
            <div className='card_info'>
                <h3 className='card_title'>{ course.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: course.desc }} />
            </div>
            <div className='card_progress_bar'>
                <p className='card_progress_bar_percentage'>{ course.progress }</p>
                <div className='card_progress_bar_border'>
                    <div className='card_progress_bar_fill' style={{ width: course.progress }}></div>
                </div>
            </div>
        </div>
    );
}