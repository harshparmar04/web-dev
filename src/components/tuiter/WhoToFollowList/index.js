import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
import './WhoToFollowList.css'

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item text-white"><h5>Who to follow</h5></li>
            {who.map((w) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={w.userName}>
                        <WhoToFollowListItem who={w}/>
                    </li>);
            })}
        </ul>);
}

export default WhoToFollowList;

