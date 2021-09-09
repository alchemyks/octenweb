import './MoviesMixList.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMoviesPageById} from "../../services/tmdb.api.services";
import {Link, useParams} from "react-router-dom";


export default function MoviesMixList(){
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const path = useParams()
    useEffect(()=>{

        !(state.mixMovies.length > 0) && dispatch(fetchMoviesPageById(1));
    },[dispatch])
    return(
        <div className={'movie_parts_list'}>
            <h3>{state.movieListTitle}</h3>
            <div className={'movie_small_card_box'}>
               {
                   state.mixMovies && state.mixMovies.map(value=>{
                        return(
                            <div key={value.id} className={'movie_box'}>

                                <Link to={`/movieinfo/${value.id}`}>
                                <div className={'movie_poster_box'}>
                                    <img className={'poster_img'} src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt={value.original_title}/>
                                </div>
                                <div className={'movie_title'}>
                              <p>{value.title}</p>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}