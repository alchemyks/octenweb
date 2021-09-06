import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import MoviesPartList from "./components/MoviesPartsList";
import Header from "./components/Header";
import GenreBadge from "./components/GenreBadge";
import {COUNT_CARD_IN_GENRE_BOX} from "./ulils/constants";

function App() {

    //todo change to right maxGenreId
    const maxGenreId = 10;

    return (
        <Router>
            <div className="App">
                <div className={'root_wrap'}>
                    <Header/>
                    <div className={'content_holder'}>
                        <div className={'main_content'}>
                            <Route exact path={'/'} render={() => {
                                return (
                                    <div className={'preview_box'}>
                                        <MoviesPartList genre={Math.random()} count={COUNT_CARD_IN_GENRE_BOX}/>
                                        <MoviesPartList genre={Math.random()} count={COUNT_CARD_IN_GENRE_BOX}/>
                                        <MoviesPartList genre={Math.random()} count={COUNT_CARD_IN_GENRE_BOX}/>
                                    </div>
                                );
                            }
                            }/>
                            <Route path={'/top250'} component={MoviesPartList}/>
                        </div>
                        <div className={'additional_content'}>
                            <GenreBadge/>
                        </div>
                    </div>
                    <div className={'footer'}></div>
                </div>
            </div>
        </Router>
    );
}

export default App;
