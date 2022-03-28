import React from "react";
import TuitListItem
    from "./tuit-list-item";
import './tuit.css';
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <div className="wd-middle-section-background">
            {
                tuits.map && tuits.map(tuit => {
                    return (

                            <TuitListItem key={tuit._id} tuit={tuit}/>

                            );
                })
            }
        </div>
    );
}

export default TuitList;