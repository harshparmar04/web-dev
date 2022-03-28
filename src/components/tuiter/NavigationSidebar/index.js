import React from "react";
import {Link, NavLink} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div className="list-group">
                <Link to="/tuiter/home" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                </Link>

                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/home">
                    <i className="fa fa-home pe-1"></i>
                    <span className="d-none d-xl-inline-block">Home</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/explore">
                    <i className=" fa fa-hashtag pe-1"></i>
                    <span className=" d-none d-xl-inline-block ">Explore</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/notifications">
                    <i className="fa fa-bell pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Notifications</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/messages">
                    <i className="fa fa-envelope pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Messages</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/bookmarks">
                    <i className="fa fa-bookmark pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Bookmarks</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/lists">
                    <i className="fas fa-list pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Lists</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/profile">
                    <i className="fa fa-user pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Profile</span>
                </NavLink>
                <NavLink className={`list-group-item list-group-item-action`} to="/tuiter/more">
                    <i className="fas fa-minus-circle pe-1"></i>
                    <span className="d-none d-xl-inline-block ">More</span>
                </NavLink>
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
