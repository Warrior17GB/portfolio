import React from 'react';
import '../styles/pages/mainPage.css';
import { NavBar } from '../components/NavBar'
import Home from './home';
import Projects from './projects';
import About from './about';
import Contact from './contact';

function MainPage() {
    return (
        <div className="mainPage">
            <NavBar />
            <Home />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default MainPage;