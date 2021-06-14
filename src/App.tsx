import React from "react";
import './App.css';
import { Nav } from "./components/nav/Nav";
import { Hero } from "./components/heroSection/Hero";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Motto } from "./components/motto/Motto";
import { Projects } from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Nav/>
            <div className="main">
                <Hero/>
                <About/>
                <Skills/>
                <Motto/>
                <Projects/>
            </div>
        </div>
    );
}

export default App;
