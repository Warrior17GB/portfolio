import '../styles/components/PorjectCard.css';

interface PropsProject {
    nome: string;
    desc: string;
    tipo: string;
    print: string;
}

export function ProjectCard(props: PropsProject) {

    return (
        <div className="projectCard">
            <div className="divImg">
                <img src={`images/${props.print}`} alt="Print do projeto" />
            </div>
            <div className="DescProject">
                <h4>{props.nome}</h4>
                <p>{props.desc}</p>
                <p>{props.tipo}</p>
            </div>
        </div>
    )
}
