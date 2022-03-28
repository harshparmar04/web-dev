import React from "react";
import {useDispatch} from "react-redux";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({
            type: "like-tuit",
            id: tuit._id
        });
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <span>
            <i className="far fa-comment"></i>
                <span>{tuit.stats.comments}</span>
            </span>
            <span>
                <i className="fas fa-retweet"></i>
                {tuit.stats.retuits}
                </span>
            <span onClick={likeTuit}>
                    {tuit.liked && <i className="fas fa-heart me-1"
                                      style={{color: 'red'}}></i>}
                {!tuit.liked && <i className="far fa-heart me-1"></i>}
                {tuit.stats && tuit.stats.likes}
            </span>
            <span>
                <i className="far fas fa-upload"></i>
             </span>
        </div>);
}

export default TuitStats;