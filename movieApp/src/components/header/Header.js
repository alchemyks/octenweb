import './Header.css'
import {Link, useHistory} from "react-router-dom";
import {fetchMovieByGenre, fetchTvTopRated} from "../../services/tmdb.api.services";
import {setTitleMovieList} from "../../redux/actionCreators";
import {useDispatch} from "react-redux";


export default function Header({themeToggler}) {
    const history = useHistory()
    let dispatch = useDispatch()
    return (
        <div className={'header'}>
            <div className={'logo'}>
                <Link to={'/'}>MOVIEBASE</Link>
            </div>
            <div className={'menu_wrapper'}>
               {/* <div><Link to={'/top250'}>ТОП 250</Link></div>
                <div><Link to={'/film'}>ФИЛЬМЫ</Link></div>
                <div><Link to={'/serial'}>СЕРИАЛЫ</Link></div>
                <div><Link to={'/cartoon'}>МУЛЬТФИЛЬМЫ</Link></div>
                <div onClick={() => {
                    history.push('/');
                    dispatch(fetchTvTopRated())
                    dispatch(setTitleMovieList('TOP TV'))
                }}>АНИМЕ
                </div>
                <div><Link to={'/translation'}>ПЕРЕДАЧИ</Link></div>*/}
            </div>
            <div className={'find_box'}></div>
            <div className={'theme_box'} onClick={themeToggler}>
                Switch Theme
            </div>

        </div>
    )
}