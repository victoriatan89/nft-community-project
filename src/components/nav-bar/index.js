import React, {useRef} from "react";
import {NavLink, useLocation, useNavigate} from 'react-router-dom'

const NavBar = () => {
    const {pathname} = useLocation();
    const reference = useRef();
    const navigate = useNavigate();
    const searchEventHandler = () => {
        const searchString = reference.current.value;
        navigate(`/explore/${searchString}`);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top fw-bold">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/app-logo.png" width="70px" height="70px" alt="app-logo"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className={`nav-link ${ pathname === "/" ? 'active' : ''}`}
                                     to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/explore"
                                     isActive={() => ["/explore", "/explore/", "/explore/:q"].includes(pathname)}>Explore</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${ pathname === "/signup" ? 'active' : ''}`}
                                     to="/signup">Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${ pathname === "/signin" ? 'active' : ''}`}
                                     to="/signin">Signin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${ pathname === "/profile" ? 'active' : ''}`}
                                     to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${ pathname === "/privacy" ? 'active' : ''}`}
                                     to="/privacy">Privacy</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2 rounded-pill"
                               style={{"width": "320px", "border": "solid black"}}
                               type="text" ref={reference}
                               placeholder="mutant-ape-yacht-club"/>
                        <button className="btn btn-light my-2 my-sm-0 rounded-pill" type="button"
                                onClick={searchEventHandler}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;