import React from 'react';
import '../styles/pages/mainPage.css';
import { NavBar } from '../components/NavBar'
import Home from './home';
import Projects from './projects';

function MainPage() {
    return (
        <div className="mainPage">
            <NavBar />
            <Home />
            <Projects />
        </div>
    )
}

export default MainPage;