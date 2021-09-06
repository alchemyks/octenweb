import './Header.css'
import {Link} from "react-router-dom";


export default function Header(){

    return(
        <div className={'header'}>
        <div className={'logo'}>
            <Link to={'/'}>OCTENFILM</Link>
        </div>
        <div className={'menu_wrapper'}>
            <div><Link to={'/top250'}>ТОП 250</Link></div>
            <div><Link to={'/film'}>ФИЛЬМЫ</Link></div>
            <div><Link to={'/serial'}>СЕРИАЛЫ</Link></div>
            <div><Link to={'/cartoon'}>МУЛЬТФИЛЬМЫ</Link></div>
            <div><Link to={'/anime'}>АНИМЕ</Link></div>
            <div><Link to={'/translation'}>ПЕРЕДАЧИ</Link></div>
        </div>
            <div className={'find_box'}></div>
            <div className={'logging_box'}></div>
        </div>
    )
}