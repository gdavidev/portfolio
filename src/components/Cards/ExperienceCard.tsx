import Experience from "../../model/Experience.ts";

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const experience: Experience = props.experience;

    return (
        <div className='card grid grid-cols-[250px_1fr]'>
            <a href={ experience.link } target='_blank'>
                <img src={ experience.img_path } alt={ experience.alt } />
            </a>
            <div className='w-full'>
                <h3 className='card-title'>{experience.title}</h3>
                <p className='card_date'>{experience.date}</p>
                <p className='card_boy'>{experience.desc}</p>
            </div>
        </div>
);
}