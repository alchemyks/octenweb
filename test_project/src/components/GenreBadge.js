import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenreList} from "../services/tmdb.api.services";
import './GenreBadge.css'

export default function GenreBadge(){

    let state = useSelector(state=>state);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchGenreList());
    }, []);

    return(
        <div className={'genre_box'}>
            <div className={'genre_title'}><h2>Жанры</h2></div>
            <div className={'genre_list'}>
            {
                state.genres.map((value, index) => {
                    return(
                        <div className={'genre_item_box'} key={value.id}>
                            <div className={'genre_number_box'}>{index+1}</div>
                            <div className={'genre_value_box'}>{value.name}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}