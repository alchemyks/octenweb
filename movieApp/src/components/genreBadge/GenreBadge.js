import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenreList, fetchMovieByGenre} from "../../services/tmdb.api.services";
import './GenreBadge.css'
import {useHistory} from "react-router-dom";
import {setTitleMovieList} from "../../redux/actionCreators";

export default function GenreBadge(){

    let state = useSelector(state=>state);
    let dispatch = useDispatch();
    let history = useHistory();

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
                        <div className={'genre_item_wrap'} key={value.id} onClick = {()=>{
                            history.push('/');
                            dispatch(fetchMovieByGenre(value.id))
                            dispatch(setTitleMovieList(value.name))
                        }}>

                                <div className={'genre_item_box'}>
                            <div className={'genre_number_box'}>{index+1}</div>
                            <div className={'genre_value_box'}>{value.name}</div>
                                </div>
                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}