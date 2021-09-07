import {LOAD_GENRES, LOAD_MIX_MOVIE_PAGE, LOAD_MOVIE_INFO, LOAD_TOP_MOVIE_PAGE} from "./actions";

const loadGenre = (payload)=>({type : LOAD_GENRES, payload});
const loadMoviesByPage = (payload)=>({type: LOAD_MIX_MOVIE_PAGE, payload});
const loadMoviesByGenre = (payload, type)=>({type: type, payload});
const loadTopMovies = (payload)=>({type: LOAD_TOP_MOVIE_PAGE, payload});
const loadMovieInfo = (payload)=>({type: LOAD_MOVIE_INFO, payload});

export {loadGenre, loadMoviesByPage, loadMoviesByGenre, loadTopMovies, loadMovieInfo}