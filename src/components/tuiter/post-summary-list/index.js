import post from "./Posts.json";
import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";
import './post-summary-list.css'

const PostSummaryList = () => {

    return (
        <ul className="list-group">
            {post.map((p) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center text-white" key={p.userName}>
                        <PostSummaryItem post={p}/>
                    </li>
                    )
            })}
        </ul>
    )
};

export default PostSummaryList;