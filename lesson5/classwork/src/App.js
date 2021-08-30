import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCarForm from "./components/cars/CreateCarForm";
import UpdateCarForm from "./components/cars/UpdateCarForm";
import {useState} from "react";


function App() {

    let [carForUpdate, setCarForUpdate] = useState(undefined)

    return (
        <Router>
            <div className="App">
                <div className={'wrap'}>
                <Link to={'/Cars'}>View cars</Link>
                <Link to={'/create_car'}>Create car</Link>
                <Link to={'/update_car'}>Update car</Link>
                <Route path={'/Cars'}>
                    <Cars/>
                </Route>
                <Route path={'/create_car'}>
                    <CreateCarForm/>
                </Route>
                <Route path={'/update_car'}>
                    <UpdateCarForm setCarForUpdate={setCarForUpdate}/>
                    <CreateCarForm car={carForUpdate}/>
                </Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
