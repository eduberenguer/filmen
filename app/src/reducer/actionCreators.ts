// @ts-ignore
import * as api from '../services/api.js';
// @ts-ignore
import { actionTypes } from './actionTypes.ts';

export const insertNewUser = (data: Object, dispatch: Function) => {
    api.insertNewUser(data).then((res) => {
        dispatch({ type: actionTypes.insertNewUser, payload: res.data });
    });
};

export const loginUser = async (data: Object, dispatch: Function) => {
    api.loginDataUser(data).then((res) => {
        dispatch({ type: actionTypes.loginUser, payload: res.data });
    });
};

export const getUserInfo = (dispatch: Function) => {
    api.getUsers().then((res) => {
        dispatch({ type: actionTypes.getUsers, payload: res.data });
    });
};
