import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div id="page_content" style={{marginTop: '4.5rem'}}>
            <h1>Contatos</h1>
            <p className="descricao_do_topico">
                Não hesite em deixar uma mensagem nos canais abaixo, perguntas e mensagens de bom dia serão sempre
                aceitos!
            </p>
            <div id="contact_container">
                <div className="contact">
                    <FontAwesomeIcon icon={[ "fab", "instagram" ]} />
                    <a href="https://www.instagram.com/gabriel.david.david/">@gabriel.david.david</a>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={[ "far", "envelope"]} />
                    <a href="mailto:gdavid.wk2202@gmail.com">gdavid.wk2202@gmail.com</a>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={[ "fab", "whatsapp" ]} />
                    <a href="https://wa.link/dg78tr">(11) 94693-8732</a>
                </div>
            </div>

            <form id="cont" action="https://formsubmit.co/21f169212ead2d9ae85bc6828ec05ecf" method="POST">
                <h2>Deixe uma mensagem:</h2>

                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" placeholder="Nome" required/>

                <label htmlFor="phone">Telefone:</label>
                <input type="number" id="phone" name="phone" maxLength={15} minLength={8} placeholder="Telefone"
                       required/>

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="E-mail" required/>

                <label htmlFor="subject">Assunto:</label>
                <input type="text" id="subject" name="subject" placeholder="Assunto" required/>

                <label htmlFor="subject">Conteúdo:</label>
                <textarea name="content" id="content" cols={6} rows={5}
                          placeholder="Conte sobre o seu assunto!"></textarea>

                <input type="submit" id="enviar_solicitacao_bt" value="Enviar"/>
            </form>
        </div>
    );
}
