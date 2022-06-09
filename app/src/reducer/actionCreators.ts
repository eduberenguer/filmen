// @ts-ignore
import * as api from '../services/api.js';
// @ts-ignore
import { actionTypes } from './actionTypes.ts';

export const insertNewUser = (data: Object) => ({
    type: actionTypes.insertNewUser,
    payload: data,
});

export const loginUser = (data: Object) => ({
    type: actionTypes.loginUser,
    payload: data,
});

export const logout = () => ({
    type: actionTypes.logout,
    payload: {},
});

// export const getUserInfo = (dispatch: Function) => {
//     api.getUsers().then((res) => {
//         dispatch({ type: actionTypes.getUsers, payload: res.data });
//     });
// };

export const addFavourite = (data: Object) => ({
    type: actionTypes.addFavourite,
    payload: data,
});
