import React, {useEffect, useState} from "react";
import TuitListItem
    from "./tuit-list-item";
import './tuit.css';
import {useSelector, useDispatch} from "react-redux";
import * as service from "../services/tuits-service";
import {findAllTuits} from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(()=> findAllTuits(dispatch), []);
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

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