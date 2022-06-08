import axios from 'axios';

export const retrieveMostPopularMovies = () => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&page=1`
        )
        .then((res: any) => res.data.results);

    return data;
};

export const retrieveMostPopularSeries = () => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&page=2`
        )
        .then((res: any) => res.data.results);

    return data;
};

export const retrieveTrending = () => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}&page=1`
        )
        .then((res: any) => res.data.results);

    return data;
};
