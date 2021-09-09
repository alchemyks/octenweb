import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import MoviesMixList from "../moviesMixList/MoviesMixList";

export default function MoviesParameterisedList({genreId, page, search}){
    const movies = useSelector(({genreMovies})=>genreMovies);
    const dispatch = useDispatch();
    /*let {genreId} = useParams()*/
    useEffect(()=>{},[])
    return (
        <MoviesMixList/>
    );

}