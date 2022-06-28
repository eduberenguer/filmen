/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// @ts-ignore
import { UserFooter } from '../../components/UserFooter.tsx';
// @ts-ignore
import * as api from './detailLogic.ts';
import { Context } from '../../context/ContextProvider.js';

export function Detail() {
    const urlImages = 'https://image.tmdb.org/t/p/w500/';
    const navigate = useNavigate();
    const { user, addFavourite }: any = useContext(Context);
    const location = useParams();
    const movieId = location.id || '';
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

    const addFavouriteById = async (id: string) => {
        addFavourite(user._id, id);
    };

    return (
        <>
            <h1>Detail</h1>
            {data && (
                <div className="p-2">
                    <div className="flex gap-5">
                        <p className="text-white">{data.title}</p>
                        <p className="text-white">{data.vote_average}</p>
                    </div>
                    <button
                        onClick={() => addFavouriteById(movieId)}
                        type="button"
                        className="text-white"
                    >
                        Favourite
                    </button>
                    <div className="flex gap-3 mb-5">
                        <img
                            src={`${urlImages}${data.poster_path}`}
                            alt={data.title}
                            height="10%"
                            className="detail-img"
                        />
                        <p className="text-white">{data.overview}</p>
                    </div>
                    <div>
                        <iframe
                            src={`https://www.youtube.com/embed/${data.video}`}
                            title="trailer"
                            frameBorder="0"
                            className="mb-5"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
