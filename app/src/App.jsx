import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home.tsx';
import { Detail } from './pages/detail/Detail.tsx';
import { Register } from './pages/register/Register.tsx';
import { Login } from './pages/login/Login.tsx';
import { Context } from './context/ContextProvider.js';
import { LandingPublic } from './pages/landing/LandingPublic.tsx';
import { Footer } from './components/Footer.tsx';

function App() {
    const { user } = useContext(Context);
    return (
        <div className="bg-black h-screen">
            <Routes>
                <Route
                    path="/"
                    element={!user?.name ? <LandingPublic /> : <Home />}
                />
                <Route
                    path="/home"
                    element={user?.name ? <Home /> : <Login />}
                />
                <Route
                    path="/detail/:type/:id"
                    element={user?.name ? <Detail /> : <Login />}
                />
                <Route
                    path="/register"
                    element={!user?.name ? <Register /> : <Home />}
                />
                <Route
                    path="/login"
                    element={!user?.name ? <Login /> : <Home />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
