import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home.tsx';
import { Register } from './pages/register/Register.tsx';
import { Login } from './pages/login/Login.tsx';
import { Context } from './context/ContextProvider.js';

function App() {
    const { user } = useContext(Context);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={user?.name ? <Home /> : <Login />} />
                <Route
                    path="/register"
                    element={!user?.name ? <Register /> : <Home />}
                />
                <Route
                    path="/login"
                    element={!user?.name ? <Login /> : <Home />}
                />
            </Routes>
        </div>
    );
}

export default App;
