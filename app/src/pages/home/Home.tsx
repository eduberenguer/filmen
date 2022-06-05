import React, { useContext } from 'react';
import { Context } from '../../context/ContextProvider.js';

export function Home() {
    const { user }: any = useContext(Context);
    console.log('homeUser', user);
    return (
        <div>
            <p>Home</p>
            <p>{user.name}</p>
        </div>
    );
}
