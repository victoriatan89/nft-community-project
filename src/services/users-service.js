import axios from "axios";
const MY_API = 'http://localhost:4000/api';

export const findUserPublicInfoById = async (id) => {
    const response = await axios.get(`${MY_API}/users/${id}`);
    return response.data;
}

export const findMostRecentUsers = async () => {
    const response = await axios.get(`${MY_API}/users/most/recent`);
    return response.data;
}
