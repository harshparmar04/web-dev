import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="pt-2">
                <div class="row">
                    <div class="col-10 col-xxl-10 ">
                    <i class="fa fa-search wd-search-icon"></i>
                    <input type="text" class="wd-search" placeholder= "Search Tuiter">
                    </div>

                    <div class="col-2 col-xxl-2 pt-2 d-flex justify-content-end">
                         <a href="explore-setting.html"> <i class="fa fa-cog fa-2x wd-setting"></i></a>
                    </div>    
                 </div>
               <div class="nav nav-tabs pt-2">
                   <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link active" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entertainment</a>
                        </li>   
                   </ul>
                </div>
                <div id="mainPageCarousel" class="carousel slide pt-2" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../images/rocket.jpeg" class="d-block w-100" alt="...">
                            <div class="wd-carousel-caption fw-bold h2">
                                <p>SpaceX's Starship</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                     ${PostSummaryList()}
                </div>
                
            </div>
            
            
    `);
}
export default ExploreComponent;