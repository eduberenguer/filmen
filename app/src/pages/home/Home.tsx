import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// @ts-ignore
import { Header } from '../../components/Header.tsx';
import { Context } from '../../context/ContextProvider.js';

export function Home() {
    const { user }: any = useContext(Context);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://imdb-api.com/API/AdvancedSearch/k_08s06xjc?title_type=feature&count=10'
            )
            .then((res: any) => {
                setData(res.data.results);
            });
    }, []);

    console.log(data);
    return (
        <div>
            <Header />
            <p className="text-white text-lg mb-4 ml-2">Hola {user.name}</p>
            <p className="text-white">Éxitos del momento</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data.map((item: any) => (
                        <img src={item.image} alt={item.title} width="30%" />
                    ))}
            </div>
            <p className="text-white">Éxitos del momento</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data.map((item: any) => (
                        <img src={item.image} alt={item.title} width="30%" />
                    ))}
            </div>
            <p className="text-white">Éxitos del momento</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data.map((item: any) => (
                        <img src={item.image} alt={item.title} width="30%" />
                    ))}
            </div>
        </div>
    );
}
