import {useDispatch, useSelector} from "react-redux";
import {COUNT_CARD_SIDEBAR} from "../../ulils/constants";
import {useEffect} from "react";
import {fetchTopMovies} from "../../services/tmdb.api.services";
import './Sidebar.css'

export default function SidebarTop() {
    let movies = useSelector(({topMovies}) => {
        return topMovies.slice(0, COUNT_CARD_SIDEBAR)
    });
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTopMovies());
    }, []);
    return (
        <div>

            <h3>Top фильмов</h3>
            <div className={'sidebar_top_box'}>
                {
                    movies.map(value => {
                        return (
                            <div key={value.id} className={'movie_poster_box'}>
                                <img className={'poster_img'}
                                     src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                                     alt={value.original_title}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}