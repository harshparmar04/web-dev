import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/tuiter/images/react-blue.png"
                             }
                         }) => {
    return (<>
        <div>
            <div>
                <div className="text-muted">{post.topic}</div>
                <div className="fw-bold">
                    {post.userName}
                    <i className="fa fa-check-circle mt-1"></i><span
                    className="text-muted">&nbsp; - &nbsp;{post.time}</span>
                </div>
                <div className="fw-bold">
                    <p>
                        {post.title}
                    </p>
                </div>
            </div>
        </div>
        <img className="wd-post-image w-15" src={post.image} alt=""/>
    </>);
};

export default PostSummaryItem;