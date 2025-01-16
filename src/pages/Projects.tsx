import ProjectsCardsContainer from "../components/Cards/Containers/ProjectsCardsContainer.tsx";

export default function Projects() {
    return (
        <div id="page_content" style={{marginTop: '4.5rem'}}>
            <h1>Projetos e Trabalhos</h1>
            <p className="descricao_do_topico">Mostruário dos meus principais projetos comerciais e acadêmicos.
            </p>

            <ProjectsCardsContainer projectsCategory='projects'/>
        </div>
    );
}
