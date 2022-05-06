import axios from "axios";
const MY_API = 'http://localhost:4000/api';
const api = axios.create({withCredentials: true});

export const signup = async (name, handle, email, password, role) => {
    const response = await api.post(`${MY_API}/signup`, {name, handle, email, password, role});
    return response.data;
}

export const signin = async (email, password) => {
    const response = await api.post(`${MY_API}/signin`, {email, password});
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${MY_API}/profile`);
    return response.data;
}

export const editProfile = async (id, newProfile) => {
    const response = await api.put(`${MY_API}/profile/${id}`, newProfile);
    return response.data;
}

export const insertCollectionToWatchlist = async (id, collection) => {
    const response = await api.put(`${MY_API}/profile/${id}/watchlist/add`, collection);
    return response.data;
}

export const deleteCollectionFromWatchlist = async (id, collection) => {
    const response = await api.put(`${MY_API}/profile/${id}/watchlist/delete`, collection);
    return response.data;
}

export const followUser = async (id1, user1, id2, user2) => {
    const response = await api.put(`${MY_API}/profile/${id1}/follow/${id2}`, {user1, user2});
    return response.data;
}

export const unfollowUser = async (id1, id2) => {
    const response = await api.put(`${MY_API}/profile/${id1}/unfollow/${id2}`);
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${MY_API}/logout`);
    return response.data;
}