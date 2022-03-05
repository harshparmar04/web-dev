import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import HomeComponent from "./HomeComponent.js";
$('#wd-home-screen').append(`
        <div class="row pt-2">
            <div class = "col-2 col-md-2 col-lg-1 col-xl-2 pt-2">
                 ${NavigationSidebar("explore")}
            </div>
            <div class="col-10 col-md-10 col-lg-7 col-xl-6 wd-center-border">
                 ${HomeComponent()}
            </div>
            <div  class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-2">
                 ${PostSummaryList()}
            </div>
        </div>    
`);