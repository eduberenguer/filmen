import axios from 'axios';

const apiUrl: string = ' http://localhost:8000/';

export const getUsers = () => axios.get(apiUrl);
