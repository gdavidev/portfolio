import Experience from "../../model/Experience.ts";

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const experience: Experience = props.experience;

    return (
        <div className='card'>
            <a href={ experience.link } target='_blank'><img src={ experience.img_path } alt={ experience.alt } /></a>
            <div className='card_info'>
                <h3 className='card_title'>{ experience.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: experience.desc }} />
            </div>
        </div>
    );
}