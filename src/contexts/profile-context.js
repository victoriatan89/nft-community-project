import React, {useContext, useState} from "react";
import * as service from "../services/auth-service";

const ProfileContext = React.createContext();

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState();

    const signin = async (email, password) => {
        try {
            const p = await service.signin(
                email,
                password
            );
            setProfile(p);
        } catch (e) {
            throw e;
        }
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile();
            setProfile(p);
            return p;
        } catch (e) {
            throw e;
        }
    }

    const signup = async (name, handle, email, password, role) => {
        try {
            const newUser = await service.signup(
                name,
                handle,
                email,
                password,
                role
            );
            setProfile(newUser);
        } catch (e) {
            throw e;
        }
    }

    const editProfile = async (id, newProfile) => {
        try {
            await service.editProfile(id, newProfile);
            setProfile(newProfile);
        } catch (e) {
            throw e;
        }
    }

    const insertCollectionToWatchlist = async (id, collection) => {
        try {
            const p = await service.insertCollectionToWatchlist(id, collection);
            setProfile(p);
        } catch (e) {
            throw e;
        }
    }

    const deleteCollectionFromWatchlist = async (id, collection) => {
        try {
            const p = await service.deleteCollectionFromWatchlist(id, collection);
            setProfile(p)
        } catch (e) {
            throw e;
        }
    }

    const followUser = async (id1, user1, id2, user2) => {
        try {
            const p = await service.followUser(id1, user1, id2, user2);
            setProfile(p);
        } catch (e) {
            throw e;
        }
    }

    const unfollowUser = async (id1, id2) => {
        try {
            const p = await service.unfollowUser(id1, id2);
            setProfile(p);
        } catch (e) {
            throw e;
        }
    }

    const value = {
        profile,
        signup,
        checkLoggedIn,
        signin,
        editProfile,
        insertCollectionToWatchlist,
        deleteCollectionFromWatchlist,
        followUser,
        unfollowUser
    }

    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => {
    return useContext(ProfileContext);
}