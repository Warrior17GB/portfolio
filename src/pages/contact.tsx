import '../styles/pages/contact.css';
import { Element } from 'react-scroll'

function Contact() {
    return (
        <Element className="contactPage" name="divContact">
            <h1>Contato!</h1>
            <h2>Tem uma ideia e gostaria de torná-la realidade?<br />Entre em contato, posso te ajudar.</h2>
            <p>Envie uma mensagem</p>
            <p>Email: <a href="mailto:this.dev.gabriel@gmail.com">this.dev.gabriel@gmail.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/5511956295523?text=Eu%20tenho%20uma%20ideia%20e%20preciso%20da%20sua%20ajuda!" target="_blank" rel="noreferrer">(11)95629-5523</a></p>
            <p>Instagram: <a href="https://www.instagram.com/this.dev.gabriel/" target="_blank" rel="noreferrer">@this.dev.gabriel</a></p>
        </Element>
    )
}

export default Contact;