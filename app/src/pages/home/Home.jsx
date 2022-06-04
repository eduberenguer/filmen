/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer, useState } from 'react';
// @ts-ignore
import { UsersReducer } from '../../reducer/UsersReducer.ts';
// @ts-ignore
import * as actionCreators from '../../reducer/actionCreators.ts';

export function Home() {
    const [state, dispatch] = useReducer(UsersReducer, []);

    useEffect(() => {
        actionCreators.getUserInfo(dispatch);
    }, []);

    return (
        <div>
            <p>Home</p>
            {state && state.map((user) => <li key={user._id}>{user.name}</li>)}
        </div>
    );
}
