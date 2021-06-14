import React from "react"
import style from "./Skill.module.css"

type SkillProps = {
    skillName: string
    skillDescription: string
}

export function Skill(props: SkillProps) {
    return (
        <div className={style.gridItem}>
            <div className={style.itemSkill}>
                <h5 className={style.skillName}>{props.skillName}</h5>
            </div>
            <p className={style.skillDescription}>{props.skillDescription}</p>
        </div>
    )
}