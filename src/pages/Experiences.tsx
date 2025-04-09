import ExperienceCardsContainer from "../components/Cards/Containers/ExperienceCardsContainer.tsx";
import CourseCardsContainer from "../components/Cards/Containers/CourseCardsContainer.tsx";

export default function Experiences() {
    return (
        <div className="page-content" style={{paddingTop: '4.5rem'}}>
            <ExperienceCardsContainer
                title='Experiência Profissional'
                description='Minhas maiores experiencias como programador'
                experiencesCategory='main'/>

            <CourseCardsContainer
                title='Principais Cursos'
                description='Maior parte da minha trajetória acadêmica.'
                coursesCategory='main'/>

            <CourseCardsContainer
                title='Cursos Extracurriculares'
                description='Um levantamento de todos os cursos em que ja terminei, comecei ou tenho o interesse em começar..'
                coursesCategory='courses'/>

            <CourseCardsContainer
                title='Outros Cursos'
                description='Cursos não relacionados a programação.'
                coursesCategory='other'/>

            <ExperienceCardsContainer
                title='Outras Experiências'
                description='Trajetória profissional paralela a programação'
                experiencesCategory='other'/>
        </div>
    );
}
