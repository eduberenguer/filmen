// @ts-ignore
import { actionTypes } from './actionTypes.ts';

const saveInfoUserInLocalStorage = (user: any) =>
    sessionStorage.setItem('user', JSON.stringify(user));

export const usersReducer = (state: any, action: any) => {
    console.log('action', action);
    switch (action.type) {
        case actionTypes.insertNewUser:
            return state;
        case actionTypes.loginUser:
            if (action.payload?.name)
                saveInfoUserInLocalStorage({ ...action.payload });
            return { ...action.payload };
        case actionTypes.getUsers:
            return [...action.payload];
        default:
            return state;
    }
};
