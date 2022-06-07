import React from 'react';
import { AiFillHome } from 'react-icons/ai';

export function UserFooter() {
    return (
        <div className="bg-black w-full bottom-0 left-0 sticky flex justify-around align-middle pb-3 pt-3">
            <AiFillHome className="text-white text-2xl" />
            <AiFillHome className="text-white text-2xl" />
            <AiFillHome className="text-white text-2xl" />
        </div>
    );
}
