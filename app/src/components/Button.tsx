import React from 'react';

export function Button({ handleSubmit, children }: any) {
    return (
        <button
            type="button"
            className="z-30 text-white bg-red-700 p-2 rounded hover:bg-red-800"
            onClick={handleSubmit}
        >
            {children}
        </button>
    );
}
