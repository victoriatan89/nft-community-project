import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as service from "../../services/users-service";
import Tabs from "./tabs";
import SecureContent from "../../components/secure-content";
import {useProfile} from "../../contexts/profile-context";

const UserProfile = () => {
    const {id} = useParams();
    const [userProfile, setUserProfile] = useState();
    const findUserPublicInfoById = async (id) => {
        try {
            const userInfo = await service.findUserPublicInfoById(id);
            setUserProfile(userInfo);
        } catch (e) {
            alert("Failed to find this user");
        }
    }
    useEffect(() => {
        findUserPublicInfoById(id);
    }, [id])

    const {profile, followUser, unfollowUser} = useProfile();
    const handleFollow = async () => {
        const id1 = profile._id;
        const user1 = {
            avatar: profile.avatar,
            username: profile.name,
            isVerified: profile.isVerified,
            handle: profile.handle,
            userId: profile._id,
            followedAt: new Date()
        }
        const id2 = id;
        const user2 = {
            avatar: userProfile.avatar,
            username: userProfile.name,
            isVerified: userProfile.isVerified,
            handle: userProfile.handle,
            userId: id,
            followedAt: new Date()
        }
        try {
            await followUser(id1, user1, id2, user2);
            alert("Successfully followed this user.");
        } catch (e) {
            alert("Failed to follow this user.");
        }
    }
    const handleUnfollow = async () => {
        const id1 = profile._id;
        const id2 = id;
        try {
            await unfollowUser(id1, id2);
            alert("Successfully unfollowed this user.");
        } catch (e) {
            alert("Failed to unfollow this user.");
        }
    }
    return (
        <div className="container mt-3">
            <SecureContent>
                <div className="mb-3 d-flex justify-content-end">
                    <button className="btn btn-primary me-2"
                            onClick={handleFollow}>
                        Follow
                    </button>
                    <button className="btn btn-danger"
                            onClick={handleUnfollow}>
                        Unfollow
                    </button>
                </div>
            </SecureContent>
            {
                userProfile && userProfile.banner &&
                <img src={userProfile.banner} width="100%" alt="banner"/>
            }
            <div className="overlap">
                {
                    userProfile && userProfile.avatar &&
                    <img src={userProfile.avatar} width="150px" height="150px" alt="avatar"
                         className="rounded-circle border border-5 border-light"
                         style={{"background": "white", "objectFit": "cover"}}/>
                }
                <div className="p-2">
                    {userProfile && <h5 className="fw-bolder mb-0">{userProfile.name}</h5>}
                    {userProfile && <p className="opacity-75 fw-bold">@ {userProfile.handle}</p>}
                </div>
            </div>
            <div style={{"position": "relative", "bottom": "50px"}}>
                <Tabs userProfile={userProfile}/>
            </div>
        </div>
    );
};

export default UserProfile;