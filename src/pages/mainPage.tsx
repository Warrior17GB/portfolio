import React from 'react';
import '../styles/pages/mainPage.css';
import { NavBar } from '../components/NavBar'
import Home from './home';

function MainPage() {
    return (
        <div className="mainPage">
            <NavBar />
            <Home />
        </div>
    )
}

export default MainPage;