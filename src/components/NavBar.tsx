import '../styles/components/NavBar.css';

export function NavBar() {
    const goToHome = () => { }
    const goToProjects = () => { }
    const goToAbout = () => { }
    const goToContact = () => { }

    return (
        <div className="NavBar">
            <button className="BtnNavBar" onClick={() => goToHome()}>Home</button>
            <button className="BtnNavBar" onClick={() => goToProjects()}>Projetos</button>
            <button className="BtnNavBar" onClick={() => goToAbout()}>Sobre</button>
            <button className="BtnNavBar" onClick={() => goToContact()}>Contato</button>
        </div>
    )
}