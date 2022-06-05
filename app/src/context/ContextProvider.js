import React, { Component, createContext, ReactElement } from 'react';
import { useUsersContextValue } from '../hooks/useUsersContextValue.js';

export const Context = createContext();

export function ContextProvider({ children }) {
    return (
        <Context.Provider value={useUsersContextValue()}>
            {children}
        </Context.Provider>
    );
}
