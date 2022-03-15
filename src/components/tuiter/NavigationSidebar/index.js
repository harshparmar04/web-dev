import React from "react";


const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === 'home' ? 'active' : ""}`} href="../HomeScreen/index.html">
                    <i className="fa fa-home pe-1"></i>
                    <span className="d-none d-xl-inline-block">Home</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " explore" ? " active" : ""
    }`} href="../ExploreScreen/explore.html">
                    <i className="fa fa-hashtag pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Explore</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " notifications" ? " active" : ""
    }`} href="#">
                    <i className="fa fa-bell pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Notifications</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " messages" ? " active" : ""
    }`} href="#">
                    <i className="fa fa-envelope pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Messages</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " bookmarks" ? " active" : ""
    }`} href="#">
                    <i className="fa fa-bookmark pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Bookmarks</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " lists" ? " active" : ""
    }`} href="#">
                    <i className="fas fa-list pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Lists</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " profile" ? " active" : ""
    }`} href="#">
                    <i className="fa fa-user pe-1"></i>
                    <span className="d-none d-xl-inline-block ">Profile</span>
                </a>
                <a className={`list-group-item list-group-item-action ${
        active === " more" ? " active" : ""
    }`} href="#">
                    <i className="fas fa-minus-circle pe-1"></i>
                    <span className="d-none d-xl-inline-block ">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>


    );
}
export default NavigationSidebar;
