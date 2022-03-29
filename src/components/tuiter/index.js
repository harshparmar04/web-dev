import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
//import "./tuiter.css";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList from "./WhoToFollowList";
import tuitReducer from "./reducers/tuits-reducer";
import "./tuiter.css";
import ProfileReducer from "./reducers/profile-reducer";

const combinedReducers = combineReducers({who: whoReducer,tuits: tuitReducer, profile: ProfileReducer});
const store = createStore(combinedReducers);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={"home"}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>


    );
};
export default Tuiter;