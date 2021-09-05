import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviePageById} from "../services/tmdb.api.services";

export default function TestComponent(){

    let list1 = useSelector(({movieList})=>movieList[0]);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMoviePageById(1));
    }, []);

    return(
        <div className={'test_component'}>
           {
                console.log(list1)
            }
        </div>
    )
}