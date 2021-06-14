import React from "react"
import style from "./Title.module.css"

type TitleProps = {
    headSmall: string
    headLarge: string
}

export function Title(props: TitleProps) {
    return (
        <div className={style.headingGroup}>
            <span className={style.sectionHeadSmall}>{props.headSmall}</span>
            <h5 className={style.sectionHeadLarge}>{props.headLarge}</h5>
        </div>
    )
}