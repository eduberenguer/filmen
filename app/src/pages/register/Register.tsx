/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/ContextProvider.js';
// @ts-ignore
import { Button } from '../../components/Button.tsx';
// @ts-ignore
import { Header } from '../../components/Header.tsx';
// @ts-ignore
import { customAlert } from '../../utils/customAlert.ts';

export function Register() {
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({});
    const { registerUser }: any = useContext(Context);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const result = await registerUser(dataForm);
        if (result === 200) {
            navigate('/login');
        } else {
            customAlert(result);
        }
    };

    return (
        <div className="h-full">
            <Header />
            <form
                className="flex items-center justify-center h-3/4 flex-col"
                onSubmit={handleSubmit}
            >
                <p className="text-white text-3xl font-bold">Registrarse</p>
                <label className="block mb-7">
                    <span className="after:ml-0.5 block text-sm font-medium text-white">
                        Nombre
                    </span>
                    <input
                        type="text"
                        name="name"
                        className="form-input px-4 py-3 rounded"
                        onChange={handleChange}
                    />
                </label>
                <label className="block mb-7">
                    <span className="after:ml-0.5 block text-sm font-medium text-white">
                        Email
                    </span>
                    <input
                        type="email"
                        name="email"
                        className="form-input px-4 py-3 rounded"
                        onChange={handleChange}
                    />
                </label>
                <label className="block mb-7">
                    <span className="after:ml-0.5 block text-sm font-medium text-white">
                        Password
                    </span>
                    <input
                        type="password"
                        name="password"
                        className="form-input px-4 py-3 rounded"
                        onChange={handleChange}
                    />
                </label>
                <Button type="submit" handleSubmit={handleSubmit}>
                    Registrarse
                </Button>
            </form>
        </div>
    );
}
