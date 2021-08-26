import './App.css';
import Cars from './components/cars/Cars'
import UserSelectComponent from "./components/users/UserSelectComponent";
import {useState} from "react";
import Posts from "./components/posts/Posts";

function App() {
    let [userId, setUserId] = useState(undefined)

  return (
    <div className="App">
        <div className={'task_part1'}>
            <h3>Classwork part 1</h3>
            <Cars/>
        </div>
        <div className={'task_part2'}>
            <h3>Classwork part 2</h3>
            <UserSelectComponent setUserId = {setUserId}/>
            <Posts userId={userId}/>
        </div>
    </div>
  );
}

export default App;
