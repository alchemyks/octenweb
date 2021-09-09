import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import Header from "./components/header/Header";
import GenreBadge from "./components/genreBadge/GenreBadge";
import MoviesMixList from "./components/moviesMixList/MoviesMixList";
import SidebarTop from "./components/sidebar/SidebarTop";
import Footer from "./components/footer/Footer";
import MovieInfo from "./components/movieInfo/MovieInfo";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./components/theme/Theme";
import {GlobalStyles} from "./components/theme/globalStyles";
import MoviesParameterisedList from "./components/moviesParameterisedList/MoviesParameteriseList";
import reducer from "./redux/reducer";
import {LOAD_MIX_MOVIE_PAGE} from "./redux/actions";
import {loadMoviesByPage} from "./redux/actionCreators";
import {useDispatch} from "react-redux";

function App() {

    const [theme, setTheme] = useState('light')
    const themeToggler = ()=>{
        console.log('SwitchTheme' )
        theme ==='light' ? setTheme('dark') : setTheme('light');

    }
    let dispatch = useDispatch()

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
        <Router>


            <div className="App">
                <div className={'root_wrap'}>
                    <Header themeToggler={themeToggler}/>
                    <div className={'content_holder'}>
                        <div className={'main_content'}>
                            <Route exact path={'/'} component={MoviesMixList}/>
                            <Switch>
                                <Route path={'/movieinfo/:id'} component={MovieInfo}/>
                                <Route path={'/genre/:genreId'} component={MoviesParameterisedList}/>
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
            </>
        </ThemeProvider>
    );
}

export default App;
