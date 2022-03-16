const WhoToFollowListItem = (who) => {
    return (`<li class="list-group-item d-flex justify-content-between align-items-center">
                <img src="${who.avatarIcon}" class="img-fluid rounded-circle p-2 wd-who-to-follow-image">
                       <div class="ms-2 me-auto">
                           <div class="fw-bold">${who.userName} <i class="fa fa-check-circle mt-1"></i></div>
                           <div class="text-muted">${who.handle}</div>
                       </div>
                       <button class="btn btn-primary rounded-pill wd-follow-btn fw-bold">Follow</button>
                   </li>`);
};

export default WhoToFollowListItem;


