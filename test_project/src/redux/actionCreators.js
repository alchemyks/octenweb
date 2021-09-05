import {LOAD_GENRE, LOAD_GLOBAL_MOVIE_PAGE} from "./actions";

const loadGenre = (payload)=>({type : LOAD_GENRE, payload});
const loadMoviesByPage = (payload)=>({type: LOAD_GLOBAL_MOVIE_PAGE, payload});

export {loadGenre, loadMoviesByPage}