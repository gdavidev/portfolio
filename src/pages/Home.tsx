import githubIcon from '/assets/images/icons/github-white.png'
import linkedinIcon from '/assets/images/icons/linkedin-white.png'
import ExperienceCardsContainer from "../components/Cards/Containers/ExperienceCardsContainer.tsx";
import CourseCardsContainer from "../components/Cards/Containers/CourseCardsContainer.tsx";
import ProjectsCardsContainer from "../components/Cards/Containers/ProjectsCardsContainer.tsx";

export default function Home() {
    return (
        <>
            <HeroBanner/>

            <div id="page_content">
                <h2>Descrição</h2>
                <p className="descricao_do_topico">
                    Comecei minha carreira como programador aos 20 anos. Através do
                    Senai e amigos, conheci a programação por volta dos 18 anos, me apaixonei pela area, principalmente
                    em <span className="highlight">Game Design</span> e
                    <span className="highlight">Web Design</span>.
                    Iniciei meus estudos no IFSP Câmpus Guarulhos em
                    <span className="highlight">Tecnólogo em Análise e Desenvolvimento de Sistemas</span> e me encontro
                    atualmente nos últimos dias do segundo semestre de curso e procurando uma vaga para
                    <span className="highlight">programador estagiário</span>.
                    Estou sempre disposto a descobrir novas áreas de atuação relacionadas a programação.
                </p>

                <ExperienceCardsContainer
                    title='Experiência Profissional'
                    description='Minhas maiores experiencias como programador'
                    experiencesCategory='main'/>

                <CourseCardsContainer
                    title='Principais Cursos'
                    description='Cursos recentes mais relevantes.'
                    coursesCategory='main'/>

                <ProjectsCardsContainer
                    title='Projetos recentes'
                    description='Projetos pessoais ou comerciais em que trabalho atualmente.'
                    projectsCategory='projects'/>
            </div>
        </>
    );
}

function HeroBanner() {
    return (
        <div id="page_cover">
            <div id="cover_text">
                <h1 id="title">
                    Web <br/>
                    Developer
                    <ul id="contact">
                        <li>
                            <a href="https://github.com/gdavidev">
                                <img src={githubIcon} alt="Github"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gdavidev/">
                                <img src={linkedinIcon} alt="Linkedin"/>
                            </a>
                        </li>
                    </ul>
                </h1>
                <CopyTextContainer text='gdavid.wk2202@gmail.com'/>
            </div>

            <div id="transition"></div>
        </div>
    );
}