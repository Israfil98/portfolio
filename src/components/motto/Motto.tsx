import React from "react"
import style from "./Motto.module.css"

export function Motto() {
    return (
        <section className={ style.motto }>
            <div className={ style.container }>
                <div className={ style.quoteWrapper }>
                    <blockquote className={ style.quote }>Any fool can write code that a computer can understand. Good
                        programmers write code that humans can understand.
                    </blockquote>
                    <cite className={ style.quoteBy }>~ Martin Fowler.</cite>
                </div>
            </div>
        </section>
    )
}