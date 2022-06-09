import { useReducer, useEffect } from 'react';
import swal from 'sweetalert';
import { usersReducer } from '../reducer/usersReducer.ts';
import * as api from '../services/api.js';
// @ts-ignore
import * as action from '../reducer/actionCreators.ts';

const getUserInSession = () => JSON.parse(sessionStorage.getItem('user'));

export function useUsersContextValue() {
    const [user, dispatch] = useReducer(usersReducer, getUserInSession());

    const registerUser = async (data) => {
        const result = await api
            .insertNewUser(data)
            .then((res) => {
                dispatch(action.insertNewUser(res.data));
                return res;
            })
            .catch((error) => error);
        return result;
    };

    const loginUser = async (data) => {
        const result = await api
            .loginDataUser(data)
            .then((res) => {
                dispatch(action.loginUser(res.data));
                return res;
            })
            .catch((error) => error);

        return result;
    };

    const logout = () => {
        dispatch(action.logout());
    };

    const addFavourite = (userId, itemId) => {
        api.addFavourite(userId, itemId).then((res) => {
            dispatch(action.addFavourite(res.data));
        });
    };

    return {
        user,
        loginUser,
        registerUser,
        logout,
        addFavourite,
    };
}
