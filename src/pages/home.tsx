import React from 'react';
import '../styles/pages/home.css';
import Particles from "react-tsparticles"
import { Element } from 'react-scroll'

function Home() {
    return (
        <Element className="homePage" name="divHome">
            <div className="bannerApresentacao">
                <h1>Hello World!</h1>
                <h2>Meu nome é <strong>&lt;Gabriel Barboza/&gt;</strong></h2>
                <h2>Sou um desenvolvedor web pronto para mudar o mundo!</h2>
                <h2>E estou em busca de novas oportunidades.</h2>
            </div>
            <div className="backgroundParticles">
                <Particles
                    options={{
                        fullScreen: {
                            enable: false
                        },
                        fpsLimit: 30,
                        particles: {
                            color: {
                                value: "#36B7FF",
                            },
                            links: {
                                color: {
                                    value: "#36B7FF"
                                },
                                opacity: 0.1,
                                enable: true,
                                distance: 200
                            },
                            move: {
                                direction: "right",
                                enable: true,
                                outModes: "out",
                                speed: 1,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 400,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.1,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 7,
                            },
                        },
                    }}
                />
            </div>
        </Element>
    )
}

export default Home;