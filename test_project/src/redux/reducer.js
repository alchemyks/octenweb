import {
    LOAD_GENRES,
    LOAD_MIX_MOVIE_PAGE,
    LOAD_GENRE_MOVIE_PAGE,
    LOAD_SOON_MOVIE_PAGE,
    LOAD_TOP_MOVIE_PAGE
} from "./actions";

let initState = {genres: [], genreMovies:[], mixMovies:[] , soonMovie: [], topMovies:[]};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_GENRES:
            return {...state, genres: [...action.payload.genres]}
        case LOAD_MIX_MOVIE_PAGE:
            console.log('reducer', action.payload)
            return {...state, mixMovies: [...action.payload]}
        case LOAD_GENRE_MOVIE_PAGE:
            return {...state, genreMovies: [...state.genreMovies, action.payload]}
        case LOAD_SOON_MOVIE_PAGE:
            return {...state, soonMovie: [...state.soonMovie, action.payload]}
        case LOAD_TOP_MOVIE_PAGE:
            return {...state, topMovies: [...state.topMovies, action.payload]}
        default:
            return state;
    }
}

export default reducer