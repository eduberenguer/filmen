/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import { Header } from '../../components/Header.tsx';
import { Context } from '../../context/ContextProvider.js';
// @ts-ignore
import { UserFooter } from '../../components/UserFooter.tsx';
// @ts-ignore
import * as request from './homeLogic.ts';

export function Home() {
    const urlImages = 'https://image.tmdb.org/t/p/w500/';
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const [data, setData] = useState([
        {
            movies: [],
            series: [],
            trending: [],
        },
    ]);

    const getData = async () => {
        const movies = await request.retrieveMostPopularMovies();
        const series = await request.retrieveMostPopularSeries();
        const trending = await request.retrieveTrending();
        setData([{ movies, series, trending }]);
    };

    useEffect(() => {
        getData();
    }, []);

    const detailPage = (id: String, type: String) => {
        navigate(`/detail/${type}/${id}`);
    };

    return (
        <div className="p-1">
            <Header />
            <p className="text-white text-lg mb-4 ml-2">Hola {user.name}</p>
            <p className="text-white pl-2 mt-2">Éxitos del momento</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].movies.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, 'movie')}
                        />
                    ))}
            </div>
            <p className="text-white pl-2 mt-2">Mi lista</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].movies.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, 'tv')}
                        />
                    ))}
            </div>
            <p className="text-white pl-2 mt-2">Las mejores series</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].series.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, 'tv')}
                        />
                    ))}
            </div>
            <p className="text-white pl-2 mt-2">Trending</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].trending.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, 'tv')}
                        />
                    ))}
            </div>
            <UserFooter />
        </div>
    );
}
