import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import Header from "./components/header/Header";
import GenreBadge from "./components/genreBadge/GenreBadge";
import {useSelector} from "react-redux";
import MoviesMixList from "./components/moviesMixList/MoviesMixList";
import SidebarTop from "./components/sidebar/SidebarTop";
import Footer from "./components/footer/Footer";
import MovieInfo from "./components/movieInfo/MovieInfo";

function App() {

    //todo change to right maxGenreId
    let genres = useSelector(({genres})=>genres);
    return (
        <Router>
            <div className="App">
                <div className={'root_wrap'}>
                    <Header/>
                    <div className={'content_holder'}>
                        <div className={'main_content'}>
                            <Route exact path={'/'} component={MoviesMixList}/>
                            <Switch>
                                <Route path={'/movieinfo/:id'} component={MovieInfo}/>
                            </Switch>
                            {/*<Route path={'/top250'} component={MoviesPartList}/>*/}
                        </div>
                        <div className={'additional_content'}>
                            <SidebarTop/>
                            <GenreBadge/>
                        </div>
                    </div>
                    <div className={'footer'}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
