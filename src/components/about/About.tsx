import React from "react"
import style from "./About.module.css"
import { Title } from "../title/Title";

export function About() {
    return (
        <section className={ style.about } id="about">
            <div className={ style.container }>
                <Title headSmall="About me" headLarge="Who am I?"/>
                <div className={ style.aboutIntro }>
                    <div className={ style.introDescription }>
                        <p>
                            <span>Hi, I'm Israfil</span> a Frontend Developer with proficiency in JS/TS, React, Redux
                        </p>
                        <p>
                            Since my school years I have been fond of programming and layout, at school I wrote my first
                            programs in Pascal. Always found programming fun. And already now I am most attracted by
                            programming in React, I want to develop in this direction. In programming, I like the fact
                            that you are doing a seemingly very difficult and incomprehensible business for people, but
                            at the same time you can bring great benefits to people, which they do not even know about!
                            Completed Frontend development course in <a className={ style.ItCourse }
                                                                        href="https://it-incubator.by/">IT-incubator</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}