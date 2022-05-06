import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import * as service from "../../services/auth-service"
import Tabs from "./tabs";
import "./index.css"

const Profile = () => {
    const {profile} = useProfile();
    const navigate = useNavigate();
    const logout = async () => {
        await service.logout();
        navigate('/signin');
    }
    return (
        <div className="container mt-3">
            <div className="mb-3 d-flex justify-content-end">
                <Link to="/profile/edit" className="btn btn-primary me-2">Edit profile</Link>
                <button className="btn btn-danger" onClick={logout}>Log out</button>
            </div>
            {
                profile && profile.banner &&
                <img src={profile.banner} width="100%" alt="banner"/>
            }
            <div className="overlap">
                {
                    profile && profile.avatar &&
                    <img src={profile.avatar} width="150px" height="150px" alt="avatar"
                         className="rounded-circle border border-5 border-light"
                         style={{"background": "white", "objectFit": "cover"}}/>
                }
                <div className="p-2">
                    {profile && <h5 className="fw-bolder mb-0">{profile.name}</h5>}
                    {profile && <p className="opacity-75 fw-bold">@ {profile.handle}</p>}
                </div>
            </div>
            <div style={{"position": "relative", "bottom": "50px"}}>
                <Tabs/>
            </div>
        </div>
    );
};

export default Profile;