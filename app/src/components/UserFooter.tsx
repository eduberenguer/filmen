import React from 'react';
import { AiFillHome } from 'react-icons/ai';

export function UserFooter({ goToPage }) {
    return (
        <div className="bg-black w-full bottom-0 left-0 sticky flex justify-around align-middle pb-3 pt-3">
            <AiFillHome
                className="text-white text-2xl"
                onClick={() => goToPage('home')}
            />
            <AiFillHome
                className="text-white text-2xl"
                onClick={() => goToPage('profile')}
            />
            <AiFillHome className="text-white text-2xl" />
        </div>
    );
}
