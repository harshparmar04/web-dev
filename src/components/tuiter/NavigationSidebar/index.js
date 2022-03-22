import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div className="list-group">
                <Link to="/tuiter/home" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link className={`list-group-item list-group-item-action ${
                    active === 'home' ? 'active' : ""}`} to="/tuiter/home">
                    <i className="fa fa-home pe-1"></i>
                    <span className="d-none d-xl-inline-block">Home</span>
                </Link>
                <Link className={`list-group-item list-group-item-action ${
                    active === " explore" ? " active" : ""
                }`} to="/tuiter/explore">
                    <i className=" fa fa-hashtag pe-1"></i>
                    <span className=" d-none d-xl-inline-block ">Explore</span>
                </Link>
                <a className={`list-group-item list-group-item-action ${
                    active === " notifications" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fa fa-bell pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Notifications</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
                    active === " messages" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fa fa-envelope pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Messages</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
                    active === " bookmarks" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fa fa-bookmark pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Bookmarks</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
                    active === " lists" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fas fa-list pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Lists</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
                    active === " profile" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fa fa-user pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Profile</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
                    active === " more" ? " active" : ""
                }`} href="google.com" alt="">
                    <i className="fas fa-minus-circle pe-1"></i>
                    <span className="d-none d-xl-inline-block ">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill" alt="">
                    Tweet</a>
            </div>
        </>


    )
        ;
}
export default NavigationSidebar;
