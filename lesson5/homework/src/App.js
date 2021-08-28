import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    withRouter
} from "react-router-dom";

import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router >
          <div className={'App'}>
        <div className={'wrap'}>

          <Link to={'/users-page'}>Users</Link>
          <Link to={'/posts-page'}>Posts</Link>
          <Link to={'/comments-page'}>Comments</Link>


          <Route path={'/users-page'}>
            <Users/>
          </Route>
          <Route path={'/posts-page'}>
            <Posts/>
          </Route>
          <Route path={'/comments-page'}>
            <Comments/>
          </Route>
      </div>
          </div>
</Router>
);
}

export default App;
