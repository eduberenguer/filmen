// @ts-ignore
import { actionTypes } from './actionTypes.ts';

export const usersReducer = (state: any, action: any) => {
    switch (action.type) {
        case actionTypes.insertNewUser:
            return state;
        case actionTypes.loginUser:
            return { ...action.payload };
        case actionTypes.getUsers:
            return [...action.payload];
        default:
            return state;
    }
};
