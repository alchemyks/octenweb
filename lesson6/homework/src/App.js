import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'wrap'}>
                    <Link to={'/users'}>View users</Link>
                    <Link to={'/posts'}>View posts</Link>
                    <Route path={'/users'} component={Users}/>

                    <Route path={'/posts'}>
                            Post
                    </Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
