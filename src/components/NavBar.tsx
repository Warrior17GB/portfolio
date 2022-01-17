import '../styles/components/NavBar.css';
import { Link } from 'react-scroll';

export function NavBar() {

    return (
        <div className="NavBar">
            <button className="BtnNavBar"><Link to="divHome" smooth={true} duration={300}>Home</Link></button>
            <button className="BtnNavBar"><Link to="divProjects" smooth={true} duration={300}>Projetos</Link></button>
            <button className="BtnNavBar">Sobre</button>
            <button className="BtnNavBar">Contato</button>
        </div>
    )
}