import React, { useEffect } from 'react';
import '../styles/pages/projects.css';
import { Element } from 'react-scroll';
import { ProjectCard } from '../components/ProjectCard';

function Projects() {
    const arrayProjetos = [
        { nome: "Nome do projeto 01", desc: "Descrição do projeto 01", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 02", desc: "Descrição do projeto 02", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 03", desc: "Descrição do projeto 03", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 04", desc: "Descrição do projeto 04", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 05", desc: "Descrição do projeto 05", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 06", desc: "Descrição do projeto 06", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 07", desc: "Descrição do projeto 07", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 08", desc: "Descrição do projeto 08", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 09", desc: "Descrição do projeto 09", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 10", desc: "Descrição do projeto 10", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 11", desc: "Descrição do projeto 11", tipo: "Projeto pessoal", print: "print.png" },
        { nome: "Nome do projeto 12", desc: "Descrição do projeto 12", tipo: "Projeto pessoal", print: "print2.png" },
        { nome: "Nome do projeto 13", desc: "Descrição do projeto 13", tipo: "Projeto pessoal", print: "print.png" }
    ]

    useEffect(() => {
        let isDown = false;
        let startX: any;
        let scrollLeft: any;
        const slider: any = document.querySelector('.projectsCarousel');

        const end = () => {
            isDown = false;
            slider.classList.remove('active');
        }

        const start = (e: any) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }

        const move = (e: any) => {
            if (!isDown) return;

            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            const dist = (x - startX);
            slider.scrollLeft = scrollLeft - dist;
        }

        (() => {
            slider.addEventListener('mousedown', start);
            slider.addEventListener('touchstart', start);

            slider.addEventListener('mousemove', move);
            slider.addEventListener('touchmove', move);

            slider.addEventListener('mouseleave', end);
            slider.addEventListener('mouseup', end);
            slider.addEventListener('touchend', end);
        })();

    }, [])

    return (
        <Element className="projects" name="divProjects">
            <div className="projectsHead">
                <h3>Esses são alguns dos meus projetos pessoais<br />e projetos para clientes parceiros.</h3>
                <div className="filtro">
                    <h3>Tipos de projetos</h3>
                    <select>
                        <option>Todos</option>
                    </select>
                </div>
            </div>
            <div className="projectsCarousel">
                {arrayProjetos.map((projeto) => (
                    <ProjectCard nome={projeto.nome} desc={projeto.desc} tipo={projeto.tipo} print={projeto.print} />
                ))}
            </div>
        </Element>
    )
}

export default Projects;