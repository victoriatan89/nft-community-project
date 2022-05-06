import React from 'react';

const PublicInfo = ({profile}) => {
    return (
        <div>
            {profile && profile.bio && <p className="text-white">{profile.bio}</p>}
            <div className="opacity-75 mb-2">
                {
                    profile && profile.website &&
                    <span className="me-4">
                        <i className="fa-solid fa-link me-1"/>
                        <a href={profile.website.replace(/^(https?:\/\/)?/i,
                            (a) => a || 'http://')}>my website</a>
                    </span>
                }
                {
                    profile && profile.joinedDate &&
                    <span style={{"display": "inline-block"}}>
                        <i className="fa-solid fa-calendar-days me-1"/>
                        Joined {(new Date(profile.joinedDate).toLocaleString("en-US")).split(",")[0]}
                    </span>
                }
            </div>
            <div className="d-flex gap-3">
                {
                    profile && profile.following &&
                    <span>
                        <b>{profile.following.length}</b>
                        <span className="opacity-75 ms-1">Following</span>
                    </span>
                }
                {
                    profile && profile.followers &&
                    <span>
                        <b>{profile.followers.length}</b>
                        <span className="opacity-75 ms-1">Followers</span>
                    </span>
                }
            </div>
        </div>
    );
};

export default PublicInfo;