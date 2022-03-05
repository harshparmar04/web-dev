import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
        <div>
            <div class="row">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 pt-2">
            ${NavigationSidebar("explore")}
        </div>
        <div class="col-10 col-md-10 col-lg-7 col-xl-6 wd-center-border">
        ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-2 wd-who-to-follow">
            ${WhoToFollowList()}
        </div>
        </div>
        </div>
        
    `);
})($)
