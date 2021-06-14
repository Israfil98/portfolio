import React from 'react';
import "../Nav.css"

export const NavList = () => {
    return (
        <ul className="navList">
            <li className="navItem">
                <a href="#home" className="navLink">Home</a>
            </li>
            <li className="navItem">
                <a href="#about" className="navLink">About</a>
            </li>
            <li className="navItem">
                <a href="#skills" className="navLink">Skills</a>
            </li>
            <li className="navItem">
                <a href="#projects" className="navLink">Projects</a>
            </li>
        </ul>
    );
};
