import {useDispatch} from "react-redux";
import {fetchMovieByGenre, fetchTvTopRated} from "../services/tmdb.api.services";

function GetDispatch(){
    return useDispatch()
}

const getMovieListByGenre = (id)=>{
  const dispatch = GetDispatch()
 dispatch(fetchMovieByGenre(id));
}

const getMovieByTv = (id)=>{
    const dispatch = GetDispatch()
    dispatch(fetchTvTopRated());
}

export {getMovieListByGenre, getMovieByTv}