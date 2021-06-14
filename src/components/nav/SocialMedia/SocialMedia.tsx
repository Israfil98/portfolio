import React from 'react';
import "../Nav.css"
import linked from "../../../img/linkedin.svg";
import git from "../../../img/github.svg";

export const SocialMedia = () => {
    return (
        <div className="socialMediaWrapper">
            <span>Follow me on</span>
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/israfil-hanif/" target="_blank" className="smLink">
                    <img className="socialIcon" src={linked} alt=""/>
                </a>
                <a href="https://github.com/Israfil98" target="_blank" className="smLink">
                    <img className="socialIcon" src={git} alt=""/>
                </a>
            </div>
        </div>
    );
};
