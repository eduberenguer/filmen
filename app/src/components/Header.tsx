import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Context } from '../context/ContextProvider.js';
// @ts-ignore
import { Button } from './Button.tsx';
import logo from '../img/logo.png';

export function Header() {
    const { user, logout } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const logoutUser = () => {
        logout();
        navigate('/register');
    };

    const { pathname } = location;

    return (
        <div className="z-20 bg-black h-20 flex items-center justify-around">
            <img src={logo} alt="logo" width="30%" />
            <Button pathname={pathname}>
                {user?.name ? (
                    <button type="button" onClick={logoutUser}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <Link
                        to={`${pathname === '/login' ? '/register' : '/login'}`}
                    >
                        {`${
                            pathname === '/login'
                                ? 'Registrarse'
                                : 'Iniciar Sesión'
                        }`}
                    </Link>
                )}
            </Button>
        </div>
    );
}
