import React from "react"
import style from "./Hero.module.css"

export function Hero() {
    return (
        <section className={style.hero} id="home">
            <h5 className={style.nameHeading}>Israfil</h5>
            <a href="#" className={style.scrollDown}>
                <div className={style.mouse}>
                    <span/>
                </div>
                <div className={style.arrow}>
                    <span/>
                </div>
            </a>
        </section>
    )
}

