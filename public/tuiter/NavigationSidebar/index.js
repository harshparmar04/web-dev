const NavigationSidebar = (active) => {
    return (`
            <div class="list-group wd-list-group-cust">
            <a class="list-group-item list-group-item-action" >
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "home" ? "active" : ""
    }" href="../HomeScreen/index.html">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline-block">Home</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "explore" ? "active" : ""
    }" href="../ExploreScreen/explore.html">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline-block ">Explore</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "notifications" ? "active" : ""
    }" href="#">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline-block ">Notifications</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "messages" ? "active" : ""
    }" href="#">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline-block ">Messages</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "bookmarks" ? "active" : ""
    }" href="#">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline-block ">Bookmarks</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "lists" ? "active" : ""
    }" href="#">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-inline-block ">Lists</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "profile" ? "active" : ""
    }" href="#">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline-block ">Profile</span>
            </a>
            <a class="list-group-item list-group-item-action ${
        active === "more" ? "active" : ""
    }" href="#">
                <i class="fas fa-minus-circle"></i>
                <span class="d-none d-xl-inline-block ">More</span>
            </a>
        </div>
       <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

    `);
}
export default NavigationSidebar;
