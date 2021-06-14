import React from "react"
import style from "./Skills.module.css"
import { Title } from "../title/Title";
import { Skill } from "./skill/Skill";

export function Skills() {
    const skills = [
        {skillName: "HTML", skillDescription: "HTML5, Semantic tags"},
        {skillName: "CSS", skillDescription: "SCSS, BEM, Flexbox, Media queries"},
        {skillName: "Javascript", skillDescription: "Methods of array: map, reduce, find and more"},
        {skillName: "Typescript", skillDescription: "Strong typing, typing props and more"},
        {skillName: "React", skillDescription: "Components, props, JSX"},
        {skillName: "Redux", skillDescription: "Connect, combineReducers, createStore and more"},
        {skillName: "REST API", skillDescription: "C.R.U.D, requests: get, post, put, delete"},
        {skillName: "Unit tests", skillDescription: "Testing components"},
        {skillName: "Git", skillDescription: "Commit, push, checkout, merge, pull"}
    ]
    const skillsComponent = skills.map(skill => <Skill skillName={ skill.skillName }
                                                       skillDescription={ skill.skillDescription }/>)

    return (
        <section className={ style.skills } id="skills">
            <div className={ style.container }>
                <Title headSmall="What I use" headLarge="Software & Web Development"/>
                <div className={ style.grid }>
                    { skillsComponent }
                </div>
            </div>
        </section>
    )
}