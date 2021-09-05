import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import MoviesPartList from "./components/MoviesPartsList";
import Header from "./components/Header";
import GenreBadge from "./components/GenreBadge";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'root_wrap'}>
                    <Header/>
                    <div className={'content_holder'}>
                        <div className={'main_content'}>
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
