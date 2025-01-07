import githubIcon from '@/assets/images/icons/github-white.png'
import linkedinIcon from '@/assets/images/icons/linkedin-white.png'
import instagramIcon from '@/assets/images/icons/instagram-white.png'

export default function Home() {
    return (
        <>
        <div id="page_cover">
            <div id="cover_text">
                <h1 id="title">
                    Web <br/>
                    Developer
                    <ul id="contact">
                        <li>
                            <a href="http://github.com/gdavidev">
                                <img src={ githubIcon } alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gdavidev/">
                                <img src={ linkedinIcon } alt="Linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gabriel.david.david/">
                                <img src={ instagramIcon } alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </h1>
            </div>

            <div id="transition"></div>
        </div>

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
            <div className='card_container' id="expr_main">

            </div>

            <h2 id="expr">Principais Cursos</h2>
            <p className="descricao_do_topico">Cursos recentes mais relevantes.</p>
            <div className='card_container' id="cursos_main">

            </div>

            <h2 id="proj">Projetos recentes</h2>
            <p className="descricao_do_topico">Projetos pessoais ou comerciais em que trabalho atualmente.</p>
            <div className="big_card_container" id="proj_main">

            </div>
        </div>
    </>
);
}