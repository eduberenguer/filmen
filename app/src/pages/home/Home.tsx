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
    const [videoType, setVideoType] = useState('movie');
    const [data, setData] = useState([
        {
            popular: [],
            rated: [],
            trending: [],
        },
    ]);

    const getData = async (typeItem: string) => {
        const popular = await request.retrieveMostPopularMovies(typeItem);
        const rated = await request.retrieveTopRatedMovies(typeItem);
        const trending = await request.retrieveTrending(typeItem);
        // const series = await request.retrieveMostPopularSeries();

        setData([{ popular, rated, trending }]);
    };

    useEffect(() => {
        getData(videoType);
    }, [videoType]);

    const detailPage = (id: String, type: String) => {
        navigate(`/detail/${type}/${id}`);
    };

    return (
        <div className="p-1">
            <Header />
            <div>
                <p className="text-white text-lg mb-4 ml-2">Hola {user.name}</p>
                <button
                    type="button"
                    className="text-white"
                    onClick={() =>
                        setVideoType(videoType === 'movie' ? 'tv' : 'movie')
                    }
                >{`${
                    videoType === 'movie' ? 'Ver series' : 'Ver peliculas'
                }`}</button>
            </div>
            <p className="text-white pl-2 mt-2">Éxitos del momento</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].popular.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, videoType)}
                        />
                    ))}
            </div>
            <p className="text-white pl-2 mt-2">Mi lista</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].popular.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, videoType)}
                        />
                    ))}
            </div>
            <p className="text-white pl-2 mt-2">Aclamadas por el público</p>
            <div className="flex flex-row items-center flex-nowrap overflow-y-auto">
                {data &&
                    data.length &&
                    data[0].rated.map((item: any) => (
                        <img
                            src={`${urlImages}${item.poster_path}`}
                            alt={item.title}
                            width="30%"
                            className="mr-1 rounded"
                            onClick={() => detailPage(item.id, videoType)}
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
                            onClick={() => detailPage(item.id, videoType)}
                        />
                    ))}
            </div>
        </div>
    );
}
