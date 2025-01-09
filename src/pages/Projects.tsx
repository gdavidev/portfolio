import useProjectsData from "../hooks/useProjectsData.ts";
import ProjectCard from "../components/Cards/ProjectCard.tsx";

export default function Projects() {
    const { projects, isProjectsLoading } = useProjectsData();

    return (
        <div id="page_content">
            <h1>Projetos e Trabalhos</h1>
            <p className="descricao_do_topico">Mostruário dos meus principais projetos comerciais e acadêmicos.
            </p>

            <div className="big_card_container" id="proj_main">
                { !isProjectsLoading &&
                    projects!.projects.map((project, index: number) => (
                        <ProjectCard key={ index } project={ project } />
                    ))
                }
            </div>
        </div>
    );
}
