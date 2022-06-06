/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
    SyntheticEvent,
    ChangeEvent,
    useContext,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { Button } from '../../components/Button.tsx';
import { Context } from '../../context/ContextProvider.js';

export function Login() {
    const [dataLogin, setDataLogin] = useState({});
    const { loginUser }: any = useContext(Context);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setDataLogin({ ...dataLogin, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();
        loginUser(dataLogin);
    };

    return (
        <div className="h-full">
            <p className="text-white">Logo</p>
            <div className="flex items-center justify-center h-full flex-col">
                <p className="text-white text-3xl font-bold">Iniciar Sesión</p>
                <form
                    action="#"
                    className="flex items-center justify-center flex-col"
                    onSubmit={handleSubmit}
                >
                    <label className="block mb-7">
                        <span className="after:ml-0.5 block text-sm font-medium text-white">
                            Email
                        </span>
                        <input
                            type="text"
                            className="form-input px-4 py-3 rounded"
                            onChange={handleChange}
                            name="email"
                        />
                    </label>
                    <label className="block mb-7">
                        <span className=" after:ml-0.5 block text-sm font-medium text-white">
                            Password
                        </span>
                        <input
                            type="email"
                            className="form-input px-4 py-3 rounded"
                            name="password"
                            onChange={handleChange}
                        />
                    </label>
                    <Button type="submit" handleSubmit={handleSubmit}>
                        Iniciar Sesión
                    </Button>
                </form>
                <div>
                    <p className="text-white mt-7">
                        <span className="text-stone-500">
                            ¿Todavia sin Filmen?
                        </span>
                        <span className="">
                            <Link to="/register"> Suscríbete ya</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
