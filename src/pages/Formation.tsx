import useCoursesData from "../hooks/useCoursesData.ts";
import CourseCard from "../components/Cards/CourseCard.tsx";
import useExperiencesData from "../hooks/useExperiencesData.ts";
import ExperienceCard from "../components/Cards/ExperienceCard.tsx";
import Course from "../model/Course.ts";
import Experience from "../model/Experience.ts";

export default function Formation() {
    const { courses, isCoursesLoading } = useCoursesData();
    const { experiences, isExperiencesLoading } = useExperiencesData();

    return (
        <div id="page_content">
            <h1>Formação acadêmica</h1>
            <p className="descricao_do_topico">Um levantamento de todos os cursos em que ja terminei, comecei ou tenho o
                interesse em começar. <br/>
                (clique nas imagens para acessar o site do curso/empresa).
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

            <h2>Cursos Principais</h2>
            <p className="descricao_do_topico">Maior parte da minha trajetória acadêmica</p>
            <div className='card_container' id="cursos_main">
                { !isCoursesLoading &&
                    courses!.main.map(
                        (course: Course, i: number) => (
                            <CourseCard key={i} course={course} />
                        )
                    )
                }
            </div>

            <h2>Cursos Extracurriculares</h2>
            <p className="descricaoo_do_topico">Informação pessoal adicional referente ao meu aprendizado</p>
            <div className='card_container' id="cursos_extr">
                { !isCoursesLoading &&
                    courses!.courses.map(
                        (course: Course, i: number) => (
                            <CourseCard key={i} course={course} />
                        )
                    )
                }
            </div>

            <h2>Outros Cursos</h2>
            <p className="descricaoo_do_topico">Cursos não relacionados a programação</p>
            <div className="card_container" id="outros_cursos">
                { !isCoursesLoading &&
                    courses!.other.map(
                        (course: Course, i: number) => (
                            <CourseCard key={i} course={course} />
                        )
                    )
                }
            </div>

            <h2 id="expr">Outras Experiências</h2>
            <p className="descricaoo_do_topico">Trajetória profissional paralela a programação</p>
            <div className="card_column" id="experiencias">
                { !isExperiencesLoading &&
                    experiences!.other.map(
                        (experience: Experience, i: number) => (
                            <ExperienceCard key={i} experience={experience} />
                        )
                    )
                }
            </div>
        </div>
    );
}
