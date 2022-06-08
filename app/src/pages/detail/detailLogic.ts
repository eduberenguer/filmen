import axios from 'axios';

interface DetailState {
    type: string;
    id: string;
}

export const getDetailbyId = async (location: DetailState) => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/${location.type}/${location.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US
    `
        )
        .then((res: any) => res.data);
    return data;
};

export const getVideoById = async (location: DetailState) => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/${location.type}/${location.id}/videos?api_key=${process.env.REACT_APP_KEY}
    `
        )
        .then((res: any) => res.data.results[0].key);
    return data;
};
