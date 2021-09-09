import {
    LOAD_GENRES,
    LOAD_MIX_MOVIE_PAGE,
    LOAD_GENRE_MOVIE_PAGE,
    LOAD_SOON_MOVIE_PAGE,
    LOAD_TOP_MOVIE_PAGE, LOAD_MOVIE_INFO, SET_TITLE_MOVIE_LIST, LOAD_TV_TOP_RATED
} from "./actions";

let initState = {genres: [], movieListTitle: 'ТОП', genreMovies:[], mixMovies:[] , soonMovie: [], topMovies:[], movieInfo: {}};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_GENRES:
            return {...state, genres: [...action.payload.genres]}
        case LOAD_MIX_MOVIE_PAGE:
            return {...state, mixMovies: [...action.payload]}
        case LOAD_GENRE_MOVIE_PAGE:
            return {...state, genreMovies: [ action.payload]}
        case LOAD_SOON_MOVIE_PAGE:
            return {...state, soonMovie: [...state.soonMovie, action.payload]}
        case LOAD_TOP_MOVIE_PAGE:
            return {...state, topMovies: [...action.payload]}
        case LOAD_MOVIE_INFO:
            return {...state, movieInfo: {...action.payload}}
        case SET_TITLE_MOVIE_LIST:
            return {...state, movieListTitle: action.payload}
        default:
            return state;
    }
}

export default reducer