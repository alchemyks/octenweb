import {LOAD_GENRES, LOAD_MIX_MOVIE_PAGE} from "./actions";

const loadGenre = (payload)=>({type : LOAD_GENRES, payload});
const loadMoviesByPage = (payload)=>({type: LOAD_MIX_MOVIE_PAGE, payload});
const loadMoviesByGenre = (payload, type)=>({type: type, payload});

export {loadGenre, loadMoviesByPage, loadMoviesByGenre}