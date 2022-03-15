import React from "react";
import postList from "./postList";


const HomeComponent = () => {
    return(
            <ul className="list-group">
                <postList/>
            </ul>
    )
};

export default HomeComponent;
