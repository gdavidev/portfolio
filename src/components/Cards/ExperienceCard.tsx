import Experience from "../../model/Experience.ts";

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const experience: Experience = props.experience;

    return (
        <div className='card grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-[14rem_1fr] gap-x-2'>
            <a href={ experience.link } target='_blank'>
                <img src={ experience.img_path } alt={ experience.alt } />
            </a>
            <div className='w-full'>
                <h3 className='card-title'>{experience.title}</h3>
                <p className='text-gray-500 text-sm -mt-2 mb-2'>{experience.date}</p>
                <p>{experience.desc}</p>
            </div>
        </div>
);
}