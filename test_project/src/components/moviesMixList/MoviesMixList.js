import './MoviesMixList.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMovieByGenre, fetchMoviePageById} from "../../services/tmdb.api.services";


export default function MoviesMixList(){
    let movies = useSelector(({mixMovies}) => [...mixMovies]);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMoviePageById(1));
    },[])
    return(
        <div className={'movie_parts_list'}>
            <h3>{'Наиболее популярные'}</h3>
            <div className={'movie_small_card_box'}>
                {
                    console.log(movies)
                }
                {
                   movies && movies.map(value=>{
                        return(
                            <div key={value.id} className={'movie_box'}>
                                <div className={'movie_poster_box'}>
                                    <img className={'poster_img'} src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt={value.original_title}/>
                                </div>
                                <div className={'movie_title'}>
                              <p>{value.title}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}