import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import './WhoToFollowList.css'
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector((state => state.who));

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item text-white"><h5>Who to follow</h5></li>
                {who.map((w) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between align-items-center"
                            key={w.userName}>
                            <WhoToFollowListItem who={w}/>
                        </li>);
                })}
            </ul>
        </div>
    );
}

export default WhoToFollowList;

