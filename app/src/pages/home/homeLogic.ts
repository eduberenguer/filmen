import axios from 'axios';

export const retrieveMostPopularMovies = (type: string) => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_KEY}&page=1`
        )
        .then((res: any) => res.data.results);

    return data;
};

export const retrieveTopRatedMovies = (type: string) => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/${type}/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
        )
        .then((res: any) => res.data.results);
    return data;
};

export const retrieveTrending = (type: string) => {
    const data = axios
        .get(
            `https://api.themoviedb.org/3/trending/${type}/day?api_key=${process.env.REACT_APP_KEY}&page=1`
        )
        .then((res: any) => res.data.results);

    return data;
};

// export const retrieveMostPopularSeries = () => {
//     const data = axios
//         .get(
//             `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&page=2`
//         )
//         .then((res: any) => res.data.results);

//     return data;
// };
