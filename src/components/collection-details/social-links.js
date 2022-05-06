import React from "react";
import {NavLink} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import * as service from "../../services/users-service";

const SocialLinks = (
    {
        links = {
            "discord": "https://discord.gg/doodles",
            "medium": null,
            "twitter": "doodles",
            "website": "https://doodles.app",
            "telegram": null,
            "instagram": null,
            "wiki": null
        },
    }) => {
    return (
        <div className="btn-group">
            {
                links && links.website &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={links.website}>
                    <i className="fa-solid fa-globe fa-fw"/>
                </NavLink>
            }
            {
                links && links.discord &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={links.discord}>
                    <i className="fa-brands fa-discord fa-fw"/>
                </NavLink>
            }
            {
                links && links.medium &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={`https://medium.com/@${links.medium}`}>
                    <i className="fa-brands fa-medium fa-fw"/>
                </NavLink>
            }
            {
                links && links.twitter &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={`https://twitter.com/${links.twitter}`}>
                    <i className="fa-brands fa-twitter fa-fw"/>
                </NavLink>
            }
            {
                links && links.instagram &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={`https://www.instagram.com/${links.instagram}`}>
                    <i className="fa-brands fa-instagram fa-fw"/>
                </NavLink>
            }
            {
                links && links.telegram &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={links.telegram}>
                    <i className="fa-brands fa-telegram fa-fw"/>
                </NavLink>
            }
            {
                links && links.wiki &&
                <NavLink className="btn btn-lg btn-outline-dark"
                         to={links.wiki}>
                    <i className="fa-brands fa-wikipedia-w fa-fw"/>
                </NavLink>
            }
        </div>
    );
}

export default SocialLinks;