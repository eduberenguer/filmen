import { useReducer, useEffect } from 'react';
import { usersReducer } from '../reducer/usersReducer.ts';
import { actionTypes } from '../reducer/actionTypes.ts';
import * as api from '../services/api.js';

export function useUsersContextValue() {
    const [user, dispatch] = useReducer(usersReducer, null);

    const registerUser = (data) => {
        api.insertNewUser(data).then((res) => {
            dispatch({ type: actionTypes.insertNewUser, payload: res.data });
        });
    };

    const loginUser = (data) => {
        api.loginDataUser(data).then((res) => {
            dispatch({ type: actionTypes.loginUser, payload: res.data });
        });
    };

    return {
        user,
        loginUser,
        registerUser,
    };
}
