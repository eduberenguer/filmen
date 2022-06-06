import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextProvider.js';
// @ts-ignore
import { Button } from './Button.tsx';

export function Header() {
    const { user, logout } = useContext(Context);

    const navigate = useNavigate();

    const logoutUser = () => {
        logout();
        navigate('/register');
    };

    return (
        <div className="z-20 bg-black h-20 flex items-center justify-around">
            <p className="text-white">Logo</p>
            <Button>
                {user?.name ? (
                    <button type="button" onClick={logoutUser}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <Link to="/login">Iniciar Sesión</Link>
                )}
            </Button>
        </div>
    );
}
