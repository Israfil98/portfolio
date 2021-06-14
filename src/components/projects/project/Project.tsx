import React from "react"
import style from "./Project.module.css"

type ProjectProps = {
    bgcImg: string
    name: string
    type: string
    src: string
}

export function Project(props: ProjectProps) {
    return (
        <div className={style.gridItem}>
            <img className={style.projectsItemImg} src={props.bgcImg} alt=""/>
            <div className={style.projectsItemInfo}>
                <h5 className={style.projectName}>{props.name}</h5>
                <span className={style.projectType}>{props.type}</span>
                <div className={style.infoCta}>
                    <a className={style.btn} href={props.src} target="_blank">Source code</a>
                </div>
            </div>
        </div>
    )
}