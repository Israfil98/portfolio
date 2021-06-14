import React from "react"
import { useState } from "react"
import "./Nav.css"

import Intro from "./Intro/Intro";
import { NavList } from "./NavList/NavList";
import { SocialMedia } from "./SocialMedia/SocialMedia";

export function Nav() {
    const [active, setActive] = useState(false)

    return (
        <nav className={ active ? "nav active" : "nav" }>
            <button className={ active ? "burgerBtn in" : "burgerBtn" }
                    onClick={ () => setActive(!active) }
            >
                <span/>
            </button>
            <Intro/>
            <NavList/>
            <SocialMedia/>
            <div className="copyrightNotice">
                <p>Copyright &copy; 2021 All rights reserved</p>
            </div>
        </nav>
    )
}
