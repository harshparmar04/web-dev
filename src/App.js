import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen/HomeScreen";
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";

function App() {
    return (<BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>);
}

export default App;

