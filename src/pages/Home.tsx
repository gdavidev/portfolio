import githubIcon from '/assets/images/icons/github-white.png'
import linkedinIcon from '/assets/images/icons/linkedin-white.png'
import ExperienceCardsContainer from "../components/Cards/Containers/ExperienceCardsContainer.tsx";
import CourseCardsContainer from "../components/Cards/Containers/CourseCardsContainer.tsx";
import ProjectsCardsContainer from "../components/Cards/Containers/ProjectsCardsContainer.tsx";

export default function Home() {
    return (
        <>
            <HeroBanner/>

            <div className='page-content pt-12'>
                <h2>Descrição</h2>
                <p className="descricao_do_topico">
                    Comecei minha carreira como programador aos 20 anos. Através do
                    Senai e amigos, conheci a programação por volta dos 18 anos, me apaixonei pela area, principalmente
                    em <span className="highlight">Game Design</span> e <span className="highlight">Web Design</span>.
                    Iniciei meus estudos no IFSP Câmpus Guarulhos em <span className="highlight">Tecnólogo em Análise
                    e Desenvolvimento de Sistemas</span> e me encontro
                    atualmente nos últimos dias do segundo semestre de curso e procurando uma vaga
                    para <span className="highlight">programador estagiário</span>.
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
        <>
            <div className={
                'select-none min-h-[102vh] bg-home-page-hero bg-cover bg-center w-full flex flex-col justify-end px-6 pb-72 '
                + '2xl:pb-20 2xl:ps-28 md:ps-12 md:pe-28 md:pb-36'
            }>
                <div className={
                    'flex gap-x-2 relative -top-2 left-0 '
                    + 'md:top-[4.5rem] md:left-[22rem] xl:top-[6rem] xl:left-[36rem]'
                }>
                    <ContactButton
                        icon={githubIcon}
                        alt='Github'
                        link='https://github.com/gdavidev'
                        highlightColor='bg-primary-red-light'/>
                    <ContactButton
                        icon={linkedinIcon}
                        alt='Linkedin'
                        link='https://www.linkedin.com/in/gdavidev/'
                        highlightColor='bg-primary-red-light'/>
                </div>
                <h1 className={
                    'font-roboto font-black text-white text-[3.75rem] leading-[3rem] '
                    + 'md:text-[5rem] md:leading-[4.25rem] xl:text-[8rem] xl:leading-[7rem]'
                }>
                    FullStack<br/>Web Developer
                </h1>
            </div>
            <div id="transition"></div>
        </>
    );
}

function ContactButton(props: { icon: string, alt: string, link: string, highlightColor: string }) {
    return (
        <a
            className='group size-10 md:size-16 duration-100'
            href={props.link}
            target="_blank"
            style={{
                maskRepeat: 'no-repeat',
                maskSize: '100%',
                maskImage: `url(${props.icon})`,
            }}>
            <div className='bg-white w-16 h-16'/>
            <div
                className={
                    props.highlightColor + ' rounded-full relative -top-20 -left-4 scale-0 '
                    + 'group-hover:scale-100 duration-200 w-24 h-24'}/>
        </a>
    )
}