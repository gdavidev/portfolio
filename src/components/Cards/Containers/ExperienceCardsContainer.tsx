import useExperiencesData, {ExperiencesData} from "../../../hooks/useExperiencesData.ts";
import Experience from "../../../model/Experience.ts";
import ExperienceCard from "../ExperienceCard.tsx";
import CardsContainerBase, {CardsContainerBaseProps} from "./CardsContainerBase.tsx";

type ExperienceCardsContainerProps = {
    experiencesCategory: keyof ExperiencesData
} & Omit<CardsContainerBaseProps, 'containerClassName' | 'children'>;

export default function ExperienceCardsContainer(props: ExperienceCardsContainerProps) {
    const {experiences, isExperiencesLoading} = useExperiencesData();

    return (
        <CardsContainerBase
            title={props.title}
            description={props.description}
            containerClassName='grid grid-cols-1'
        >
            {!isExperiencesLoading &&
                experiences![props.experiencesCategory].map(
                    (experience: Experience, i: number) => (
                        <ExperienceCard key={i} experience={experience}/>
                    ))
            }
        </CardsContainerBase>
    );
}