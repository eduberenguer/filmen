import axios from 'axios';

const apiUrl = ' http://localhost:8000/';

export const insertNewUser = (data) => axios.post(`${apiUrl}register`, data);

export const loginDataUser = async (data) => axios.post(`${apiUrl}login`, data);

export const getUsers = () => axios.get(apiUrl);
