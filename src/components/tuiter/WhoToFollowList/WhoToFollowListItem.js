import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '/tuiter/images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }) => {
    return (
        <>
            <img src={who.avatarIcon} width="48" className="rounded-circle float-start" alt=""/>
            <div className="ms-2 me-auto">
                <div className="fw-bold">@{who.userName} <i className="fa fa-check-circle mt-1"></i></div>
                <div className="text-muted">@{who.handle}</div>
            </div>
            <button className="btn btn-primary rounded-pill wd-follow-btn fw-bold">Follow</button>
        </>
    )
};

export default WhoToFollowListItem;


