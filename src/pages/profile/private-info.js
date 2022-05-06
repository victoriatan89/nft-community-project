import React from 'react';
import {useProfile} from "../../contexts/profile-context";

const PrivateInfo = () => {
    const {profile} = useProfile();
    const bday = (new Date(profile.dob).toLocaleString("en-US")).split(",")[0];
    return (
        <div>
            <div className="opacity-75 mb-2">
                {
                    profile && profile.email &&
                    <span className="me-4"><i className="fa-regular fa-envelope me-1"/>
                        {profile.email}
                    </span>
                }
                {
                    profile && profile.dob &&
                    <span className="me-4" style={{"display": "inline-block"}}>
                        <i className="fa-solid fa-cake-candles me-1"/>Born {bday}
                    </span>
                }
                {
                    profile && profile.location &&
                    <span className="me-4"><i className="fa-solid fa-location-dot me-1"/>
                        {profile.location}
                    </span>
                }
            </div>
        </div>
    );
};

export default PrivateInfo;