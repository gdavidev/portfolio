import Experience from "../../model/Experience.ts";
import {CardLinkImage} from "./CardBase.tsx";

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const experience: Experience = props.experience;

    return (
        <div className={
            'bg-card-background rounded-md p-4 grid grid-cols-1 place-items-start '
            + 'lg:grid-cols-[14rem_1fr] gap-x-2 shadow-md'
        }>
            <CardLinkImage className='w-56' src={experience.img_path} link={experience.link} alt={experience.title} />
            <div className='w-full'>
                <h3 className='font-rubik font-bold text-primary text-2xl mb-2'>
                    {experience.title}
                </h3>
                <p className='text-gray-500 text-sm -mt-2 mb-2'>{experience.date}</p>
                <p>{experience.desc}</p>
            </div>
        </div>
);
}