import React from "react"
import style from "./Projects.module.css"
import { Title } from "../title/Title";
import { Project } from "./project/Project";
import bgcImg from "../../img/project.png"

export function Projects() {
    const projects = [
        {
            name: "Arabic Alphabet",
            type: "Web app",
            src: "https://github.com/quranacademy/arabic-alphabet",
            bgcImg: bgcImg
        },
        {
            name: "Social Network",
            type: "Web app",
            src: "https://github.com/Israfil98/social-network-reactjs",
            bgcImg: bgcImg
        },
        {
            name: "Todo list",
            type: "Web app",
            src: "https://github.com/Israfil98/todo-list",
            bgcImg: bgcImg
        },
        {
            name: "Portfolio",
            type: "Web app",
            src: "https://github.com/Israfil98/portfolio",
            bgcImg: bgcImg
        },
        {
            name: "React Kabzda Course from IT-INCUBATOR",
            type: "Web app",
            src: "https://github.com/Israfil98/react-kabzda-lessons",
            bgcImg: bgcImg
        },
        {
            name: "Counter",
            type: "Web app",
            src: "https://github.com/Israfil98/exam-counter",
            bgcImg: bgcImg
        },
        {
            name: "Homeworks IT-INCUBATOR",
            type: "Web app",
            src: "https://github.com/Israfil98/homeworks-practice",
            bgcImg: bgcImg
        },
        {
            name: "GCD",
            type: "Mobile IOS App",
            src: "https://github.com/Israfil98/GCD",
            bgcImg: bgcImg
        },
        {
            name: "Todo list",
            type: "Mobile IOS App",
            src: "https://github.com/Israfil98/ToDoList",
            bgcImg: bgcImg
        },
    ]
    const projectsComponent = projects.map(project => <Project name={ project.name }
                                                               type={ project.type }
                                                               src={ project.src }
                                                               bgcImg={ project.bgcImg }/>)

    return (
        <section className={ style.projects } id="projects">
            <div className={ style.container }>
                <Title headSmall="Portfolio" headLarge="Recent Projects"/>
                <div className={ style.grid }>
                    { projectsComponent }
                </div>
            </div>
        </section>
    )
}