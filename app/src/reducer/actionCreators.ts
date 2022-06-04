// @ts-ignore
import * as api from '../services/api.ts';
// @ts-ignore
import { actionTypes } from './actionTypes.ts';

export const getUserInfo = (dispatch: Function) => {
    api.getUsers().then((res: any) => {
        dispatch({ type: actionTypes.getUsers, payload: res.data });
    });
};
