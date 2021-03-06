import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen/HomeScreen";
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";
import './vendors/bootstrap/css/bootstrap-cyborg.min.css'
import Tuiter from "./components/tuiter";
import ProfileScreen from "./components/tuiter/profile-screen/profilescreen";
import EditScreen from "./components/tuiter/edit-profile";

function App() {
    return (<BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    <Route index
                    element={<Labs/>}/>
                    <Route path="labs"
                           element={<Labs/>}/>
                    <Route path="hello"
                           element={<HelloWorld/>}/>
                    <Route path="tuiter"
                           element={<Tuiter/>}>
                        <Route index
                               element={<HomeScreen/>}/>
                        <Route path="home"
                               element={<HomeScreen/>}/>
                        <Route path="explore"
                               element={<ExploreScreen/>}/>
                        <Route path="profile"
                               element={<ProfileScreen/>}>
                        </Route>
                        <Route path="profile/edit" element={<EditScreen/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>);
}

export default App;

