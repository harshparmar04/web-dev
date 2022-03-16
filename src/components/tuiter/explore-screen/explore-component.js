import PostSummaryList from "../post-summary-list";
import React from "react";
import './explore-screen.css'

const ExploreComponent = () => {
    return (
            <div className="pt-2">
                <div className="row">
                    <div className="col-10 col-xxl-10 ">
                    <i className="fa fa-search wd-search-icon"></i>
                    <input type="text" className="wd-search" placeholder= "Search Tuiter"/>
                    </div>

                    <div className="col-2 col-xxl-2 pt-2 d-flex justify-content-end">
                         <a href="www.google.com"> <i className="fa fa-cog fa-2x wd-setting"></i></a>
                    </div>    
                 </div>
               <div className="nav nav-tabs pt-2">
                   <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="www.google.com">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Entertainment</a>
                        </li>   
                   </ul>
                </div>
                <div id="mainPageCarousel" className="carousel slide pt-2" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/tuiter/images/rocket.jpeg" className="d-block w-100" alt="..."/>
                            <div className="wd-carousel-caption fw-bold h2">
                                <p>SpaceX's Starship</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                     {<PostSummaryList/>}
                </div>

            </div>
)

}
export default ExploreComponent;