import React from "react";
import "./home.css"

const previewTitle = ({post}) => {
    return (
        <div className="wd-post-preview-thumbnail p-2">
            <div className="wd-preview-thumbnail-title ">
                {post.previewTitle}
            </div>
            <div className="wd-preview-thumbnail-text text-muted">

                {post.note}
            </div>
            <div className="wd-preview-thumbnail-text text-muted">
                <i className="fa fa-link"></i>
                {post.link}
            </div>
        </div>
    )
}

const PostItem = ({
                      post = {
                          "userName": "Elon Musk",
                          "handle": "@elonmusk",
                          "time": "23h",
                          "image": "../images/inspiration.jpeg",
                          "userImage": "../images/spacex.jpeg",
                          "previewTitle": "Countdown: Inspiration4 Mission to Space. | Netflix official site",
                          "title": "Amazing show about <a href='#'>@Inspirational4x</a> mission!",
                          "note": "From training to launch to landing, this all access docuseries rides with with the inspiration4 crewon the first all civilian orbital space mission",
                          "comments": "4.2k",
                          "likes": "37.5k",
                          "retuits": "3.5k",
                          "link": "netflx.com"
                      }
                  }) => {
    return (
        <div className="wd-post-item">
            <img src={post.userImage} className="wd-post-avatar"/>
            <div className="wd-post-post">
                <div className="d-flex flex-row">
                    <div className="wd-post-author-name pe-1">
                        {post.userName}
                    </div>
                    <i className="fa fa-check-circle mt-1 pe-1"></i>
                    <div className="wd-post-author-handle text-muted">
                        {post.handle}
                    </div>
                    <div className="wd-post-timestamp text-muted">
                        &nbsp;{post.time}
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="wd-post-content" dangerouslySetInnerHTML={{ __html: post.title }}>
                    </div>
                    <div className="wd-post-preview">
                        <div className="wd-post-preview-image">
                            <img className="wd-post-preview-image" src={post.image}/>
                        </div>
                        {post.previewTitle !== '' ? previewTitle(post) : ""}

                    </div>

                    <div className="wd-post-action-options">
                        <div>
                            <a href="#" className="wd-action-hyperlink">
                                <i className="far fa-comment wd-action-icon"></i>
                                <span className="wd-action-text">{post.comments}</span>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="wd-action-hyperlink">
                                <i className="fas fa-retweet wd-action-icon"></i>
                                <span className="wd-action-text">{post.retuits}</span>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="wd-action-hyperlink">
                                <i className="far fa-heart wd-action-icon"></i>
                                <span className="wd-action-text">{post.likes}</span>
                            </a>
                        </div>

                        <div>
                            <a href="#">
                                <i className=" fas fa-upload wd-action-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;