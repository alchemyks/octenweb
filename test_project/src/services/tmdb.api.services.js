import {loadGenre, loadMoviesByPage} from "../redux/actionCreators";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTY4NGNkMThmZTk0YTE3MjI1NzU1MWUwMmEzZDUxZCIsInN1YiI6IjYxMzIyMjNjOTI0Y2U1MDA4OWZkYTUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vFe9D5dFMgvcsnafWwshEaS85HVyPNAGq_fF9-rCymc'
const baseUrlV3 = 'https://api.themoviedb.org/3';
const baseUrlV4 = 'https://api.themoviedb.org/4';

const baseHeaders = {headers: {'Content-type': 'application/json; charset=UTF8',
        Authorization: `Bearer ${accessToken}`,}}

const fetchGenreList = ()=> async (dispatch) => {
    let response = await (await fetch(baseUrlV3+'/genre/movie/list',{...baseHeaders})).json();
    dispatch(loadGenre({...response}));
}
/*`/list/${listId}`*/
const fetchMoviePageById = (pageId)=> async (dispatch) => {
    let response = await (await fetch(baseUrlV3+`/discover/movie/?page=${pageId}`, baseHeaders).then(value => value.json()));
    dispatch(loadMoviesByPage({...response}));
}

const fetchNewMoviePage = () => async (dispatch) => {
    let response = await (await fetch(baseUrlV3+``, baseHeaders).then(value => value.json()));
    //todo add new action creator!!!
    dispatch()

}

export {fetchGenreList, fetchMoviePageById}

