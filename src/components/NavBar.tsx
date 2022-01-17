import '../styles/components/NavBar.css';
import { Link } from 'react-scroll';

export function NavBar() {

    return (
        <div className="NavBar">
            <button className="BtnNavBar"><Link to="divHome" smooth={true} duration={300}>Home</Link></button>
            <button className="BtnNavBar"><Link to="divProjects" smooth={true} duration={300}>Projetos</Link></button>
            <button className="BtnNavBar"><Link to="divAbout" smooth={true} duration={300}>Sobre</Link></button>
            <button className="BtnNavBar"><Link to="divContact" smooth={true} duration={300}>Contato</Link></button>
        </div>
    )
}