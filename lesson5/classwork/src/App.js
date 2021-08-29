import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCarForm from "./components/cars/CreateCarForm";


function App() {
    return (
        <Router>
            <div className="App">
                <Link to={'/Cars'}>Cars</Link>
                <Link to={'/create_car'}>Create Car</Link>
                <Route path={'/Cars'}>
                    <Cars/>
                </Route>
                <Route path={'/create_car'}>
                    <CreateCarForm/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
