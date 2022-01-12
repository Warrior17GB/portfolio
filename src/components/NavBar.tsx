import '../styles/components/NavBar.css';
import { Link } from 'react-scroll';

export function NavBar() {

    return (
        <div className="NavBar">
            <button className="BtnNavBar"><Link to="divHome" spy={true} smooth={true} duration={500} >Home</Link></button>
            <button className="BtnNavBar">Projetos</button>
            <button className="BtnNavBar">Sobre</button>
            <button className="BtnNavBar">Contato</button>
        </div>
    )
}