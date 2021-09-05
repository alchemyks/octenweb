import {LOAD_GENRE, LOAD_GLOBAL_MOVIE_PAGE} from "./actions";

let initState = {genres: [], movieList: []};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_GENRE:
            return {...state, genres: [...action.payload.genres]}
        case LOAD_GLOBAL_MOVIE_PAGE:
            return {...state, movieList: [...state.movieList, action.payload]}
        default:
            return state;
    }
}

export default reducer