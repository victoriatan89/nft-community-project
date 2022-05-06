import axios from "axios";
const MY_API = 'http://localhost:4000/api';

export const getPostsBySlug = async (slug) => {
    const response = await axios.get(`${MY_API}/posts/${slug}`);
    return response.data;
}

export const getPostsByUserId = async (userId) => {
    const response = await axios.get(`${MY_API}/posts/user/${userId}`);
    return response.data;
}

export const getMostRecentPosts = async () => {
    const response = await axios.get(`${MY_API}/posts/most/recent`);
    return response.data;
}

export const createPost = async (newPost) => {
    const response = await axios.post(`${MY_API}/posts`, newPost);
    return response.data;
}

export const updatePost = async (id, post) => {
    const response = await axios.put(`${MY_API}/posts/${id}`, post);
    return response.data;
}

export const addReply = async (id, reply) => {
    const response = await axios.put(`${MY_API}/posts/${id}/reply`, reply);
    return response.data;
}