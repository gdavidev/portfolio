import ExperienceCardsContainer from "../components/Cards/Containers/ExperienceCardsContainer.tsx";
import CourseCardsContainer from "../components/Cards/Containers/CourseCardsContainer.tsx";

export default function Formation() {
    return (
        <div className="page-content" style={{paddingTop: '4.5rem'}}>
            <h1>Formação acadêmica</h1>
            <p className="descricao_do_topico">Um levantamento de todos os cursos em que ja terminei, comecei ou tenho o
                interesse em começar. <br/>
                (clique nas imagens para acessar o site do curso/empresa).
            </p>

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
                description='Informação pessoal adicional referente ao meu aprendizado.'
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
