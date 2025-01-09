import githubIcon from '@/assets/images/icons/github-white.png'
import linkedinIcon from '@/assets/images/icons/linkedin-white.png'
import instagramIcon from '@/assets/images/icons/instagram-white.png'
import useCoursesData from "../hooks/useCoursesData.ts";
import useExperiencesData from "../hooks/useExperiencesData.ts";
import ExperienceCard from "../components/Cards/ExperienceCard.tsx";
import CourseCard from "../components/Cards/CourseCard.tsx";
import useProjectsData from "../hooks/useProjectsData.ts";
import ProjectCard from "../components/Cards/ProjectCard.tsx";
import Experience from "../model/Experience.ts";
import Course from "../model/Course.ts";

export default function Home() {
    const {projects, isProjectsLoading} = useProjectsData();
    const {courses, isCoursesLoading} = useCoursesData();
    const {experiences, isExperiencesLoading} = useExperiencesData();

    return (
        <>
            <HeroBanner />

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

                <h2>Experiência Proficional</h2>
                <p className="descricao_do_topico">Minhas maiores experiencias como programador</p>
                <div className='card_column' id="expr_main">
                    { !isExperiencesLoading &&
                        experiences!.main.map(
                            (experience: Experience, i: number) => (
                                <ExperienceCard key={i} experience={experience} />
                            )
                        )
                    }
                </div>

                <h2 id="expr">Principais Cursos</h2>
                <p className="descricao_do_topico">Cursos recentes mais relevantes.</p>
                <div className='card_container' id="cursos_main">
                    { !isCoursesLoading &&
                        courses!.main.map(
                            (course: Course, i: number) => (
                                <CourseCard key={i} course={course} />
                            )
                        )
                    }
                </div>

                <h2 id="proj">Projetos recentes</h2>
                <p className="descricao_do_topico">Projetos pessoais ou comerciais em que trabalho atualmente.</p>
                <div className="big_card_container" id="proj_main">
                    { !isProjectsLoading &&
                        projects!.projects.map((project, index: number) => (
                            <ProjectCard key={ index } project={ project } />
                        ))
                    }
                </div>
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
                        <li>
                            <a href="https://www.instagram.com/gabriel.david.david/">
                                <img src={instagramIcon} alt="Instagram"/>
                            </a>
                        </li>
                    </ul>
                </h1>
            </div>

            <div id="transition"></div>
        </div>
    );
}