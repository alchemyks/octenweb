import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMovieInfo} from "../../services/tmdb.api.services";
import './MovieInfo.css'

export default function MovieInfo(){
    let {id} =useParams();
    let param = useParams();
    let movieCard = useSelector(({movieInfo}) => movieInfo);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMovieInfo(id));
    },[id]);
    return(
        <div className={'movie_info_box'}>
            {

                    console.log('MovieMix', param)

            }
            <div className={'movie_info_wrap'}>
                <div className={'movie_info_poster_box'}>
                    {<img src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt={movieCard.original_title}/>}
                </div>
                <div className={'movie_infobox'}>
                    <h4>{movieCard.title}</h4>
                    <p>Бюджет: {movieCard.budget}</p>
                    <p>Дата релиза: {movieCard.release_date}</p>

                </div>
            </div>
            <div className={'movie_info_overview'}>
                <h5>Описание:</h5>
                <p>{movieCard.overview}</p>
            </div>

        </div>
    )
}