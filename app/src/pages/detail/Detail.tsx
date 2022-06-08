/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// @ts-ignore
import * as api from './detailLogic.ts';

export function Detail() {
    const urlImages = 'https://image.tmdb.org/t/p/w500/';
    const location = useParams();
    const [data, setData] = useState({
        poster_path: '',
        title: '',
        overview: '',
        vote_average: '',
        video: '',
    });

    const getData = async () => {
        const result = await api.getDetailbyId(location);
        const videoResult = await api.getVideoById(location);
        const { poster_path, title, overview, vote_average } = result;
        setData({
            poster_path,
            title,
            overview,
            vote_average,
            video: videoResult,
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Detail</h1>
            {data && (
                <div>
                    <p className="text-white">{data.title}</p>
                    <img
                        src={`${urlImages}${data.poster_path}`}
                        alt={data.title}
                        width="30%"
                    />
                    <p className="text-white">{data.overview}</p>
                    <p className="text-white">{data.vote_average}</p>
                    <iframe
                        src={`https://www.youtube.com/embed/${data.video}`}
                        title="trailer"
                        frameBorder="0"
                    />
                </div>
            )}
        </>
    );
}
