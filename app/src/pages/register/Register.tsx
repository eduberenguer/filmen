import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/ContextProvider.js';

export function Register() {
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({});
    const { registerUser }: any = useContext(Context);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        registerUser(dataForm);
        navigate('/login');
    };

    return (
        <div>
            <p>Register</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
