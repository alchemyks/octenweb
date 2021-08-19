import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="App">
        <div>
            <h2>Task 1 posts</h2>
            <Posts/>
        </div>
        <div>
            <h2>Task 2 comments</h2>
            <Comments/>
        </div>
    </div>
  );
}

export default App;
