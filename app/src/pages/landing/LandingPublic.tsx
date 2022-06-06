import axios from 'axios';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Header } from '../../components/Header.tsx';

export function LandingPublic() {
    return (
        <div className="bg-landing-poster h-screen">
            <Header />
            <div className="p-2 text-center mt-11">
                <p className="z-30 text-white text-center text-2xl">
                    Todas las películas y series que desees, y mucho más.
                </p>
                <p className="z-30 text-white text-center text-lg">
                    Disfruta donde quieras. Cancela cuando quieras.
                </p>
            </div>
        </div>
    );
}
