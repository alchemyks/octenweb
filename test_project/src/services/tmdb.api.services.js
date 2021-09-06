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

const fetchMovieByGenre = (genreId)=> async (dispatch) => {
    let response = await (await fetch(baseUrlV3+`/discover/movie/?with_genres=${genreId}`,{...baseHeaders})).json();
    dispatch(loadGenre({...response}));
}
/*`/list/${listId}`*/
/*/discover/movie/?page=${pageId}`*/

const fetchMoviePageById = (pageId)=> async (dispatch) => {
    let response = await (await fetch(baseUrlV3+`/discover/movie?sort_by=popularity.desc`, baseHeaders).then(value => value.json()));
    console.log('services', response)
    dispatch(loadMoviesByPage([...response.results]));
}

const fetchNewMoviePage = () => async (dispatch) => {
    let response = await (await fetch(baseUrlV3+``, baseHeaders).then(value => value.json()));
    //todo add new action creator!!!
    dispatch()

}

export {fetchGenreList, fetchMoviePageById, fetchMovieByGenre}

