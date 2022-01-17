import '../styles/pages/contact.css';
import { Element } from 'react-scroll'

function Contact() {
    return (
        <Element className="contactPage" name="divContact">
            <h1>Contato!</h1>
            <h2>Tem uma ideia e gostaria de torná-la realidade?<br />Entre em contato, posso te ajudar.</h2>
            <p>Envie uma mensagem</p>
            <p>Email: this.dev.gabriel@gmail.com</p>
            <p>WhatsApp: (11)95629-5523</p>
            <p>Instagram: @this.dev.gabriel</p>
        </Element>
    )
}

export default Contact;