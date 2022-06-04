// @ts-ignore
import { actionTypes } from './actionTypes.ts';

export const UsersReducer = (state: any, action: any) => {
    switch (action.type) {
        case actionTypes.getUsers:
            return [...action.payload];
        default:
            return state;
    }
};
