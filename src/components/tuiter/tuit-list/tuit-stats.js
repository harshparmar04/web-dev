import React from "react";
import {useDispatch} from "react-redux";
import "./tuit.css";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({
            type: "like-tuit",
            id: tuit._id
        });
    };

    return (
        <div className="d-flex flex-row">
            <span className="col">
            <i className="far fa-comment me-1"></i>
                <span>{tuit.stats.comments}</span>
            </span>
            <span className="col">
                <i className="fas fa-retweet me-1"></i>
                {tuit.stats.retuits}
                </span>
            {/*<span onClick={likeTuit} className="col">
                    {tuit.liked && <i className="fas fa-heart me-1"
                                      style={{color: 'red'}}></i>}
                {!tuit.liked && <i className="far fa-heart me-1"></i>}
                {tuit.stats && tuit.stats.likes}
            </span>*/}
            <span className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    stats: {
                        ...tuit.stats,
                        likes: tuit.stats.likes + 1
                    }
                })} className="far fa-thumbs-up ms-2"></i> {tuit.stats.likes}
            </span>
            <span className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    stats: {
                        ...tuit.stats,
                        dislikes: tuit.stats.dislikes ? tuit.stats.dislikes + 1 : 1
                    }
                })} className="far fa-thumbs-down ms-2"></i> {tuit.stats.dislikes ? tuit.stats.dislikes : 0}
            </span>
            <span className="col">
                <i className="far fas fa-upload"></i>
             </span>
        </div>);
}

export default TuitStats;