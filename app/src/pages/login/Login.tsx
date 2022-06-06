import React, {
    SyntheticEvent,
    ChangeEvent,
    useContext,
    useState,
} from 'react';
import { Context } from '../../context/ContextProvider.js';

export function Login() {
    const [dataLogin, setDataLogin] = useState({});
    const { user, loginUser }: any = useContext(Context);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setDataLogin({ ...dataLogin, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();
        loginUser(dataLogin);
    };

    return (
        <div>
            <h2>LOGIN</h2>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="email" />
                <input type="text" onChange={handleChange} name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
