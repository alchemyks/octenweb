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

    let [carForUpdate, setCarForUpdate] = useState({})

    return (
        <Router>
            <div className="App">
                <Link to={'/Cars'}>Cars</Link>
                <Link to={'/create_car'}>Create Car</Link>
                <Link to={'/update_car'}>Update Car</Link>
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
        </Router>
    );
}

export default App;
