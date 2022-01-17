import React from 'react';
import '../styles/pages/about.css';
import { Element } from 'react-scroll'

function About() {
    return (
        <Element className="aboutPage" name="divAbout">
            <div className="aboutMe">
                <div className="photo"><img src="images/FotoPerfil.jpg" alt="Foto Dev" /></div>
                <div className="text">
                    <h2>Sobre mim</h2>
                    <p>Sou Desenvolvedor Web com mais de 2 anos de experiência, comprometido em entregar produtos de ótima qualidade, que agregem valor ao negócio e uma ótima experiência ao cliente final, atuando de forma profissional, respeitando os requisitos solicitados e disposto a propor as mais diversar soluções.</p>
                </div>
            </div>
            <div className="techAndKnowledge">
                <div className="tech">
                    <h2>Tecnologias:</h2>
                    <div><i className="fab fa-html5"></i>HTML5</div>
                    <div><i className="fab fa-css3-alt"></i>CSS3</div>
                    <div><i className="fab fa-js-square"></i>JavaScript</div>
                    <div><i className="fab fa-js-square"></i>React.JS</div>
                    <div><i className="fab fa-js-square"></i>Node.JS</div>
                    <div><i className="fas fa-database"></i>SQL</div>
                    <div><i className="fas fa-code"></i>E mais futuramente...</div>
                </div>
                <div className="knowledge">
                    <h2>Conhecimento</h2>
                    <p>Conhecimento nunca é demais, por isso sempre procuro aprender cada vez mais. Trabalho com ótimas linguagens de programação mas estou aberto a aprender novas tecnologias para aplicar em futuros projetos e assim atender qualquer tipo de necessidade.</p>
                </div>
            </div>
        </Element>
    )
}

export default About;