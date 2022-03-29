import React from "react";
import {useSelector} from "react-redux";
import "./profilescreen.css"
import {Link} from "react-router-dom";

const ProfileScreen = () => {


    const stateProfile = (state) => state.profile;
    const profile = useSelector(stateProfile);

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row">
                <i className="fas fa-arrow-left mt-2"></i>
                <div>
                    <div className="row fw-bolder text-white h6 ms-3 mb-0">
                        <span >{profile.firstName} {profile.lastName}</span>
                    </div>
                    <div className="row  ms-3">
                        <span className="text-muted">{profile.tuits} Tuits</span>
                    </div>
                </div>
            </div>


            <img className="row" src={profile.bannerPicture} alt="Banner Image"/>
            <div>
                <div>
                    <img className="wd-profile-image" src={profile.profilePicture} alt="Profile Image"/>
                    <div className="wd-edit-profile">
                        <Link to="/tuiter/profile/edit" className="btn btn-primary wd-edit-button">Edit Profile</Link>
                    </div>
                </div>
                <div className="row">
                    <span className="fw-bolder text-white h4 m-0">{profile.firstName} {profile.lastName}</span>
                </div>
                <div className="row">
                    <span className="text-muted">@{profile.handle}</span>
                </div>
                <div className="row">
                    <a href={profile.website}>{profile.website}</a>
                </div>
                <div className="row mt-3">
                    <span className="wd-bio">{profile.bio}</span>
                </div>
                <div className="d-flex flex-row text-muted mt-2 ms-1">
                <span className="me-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {profile.location}
                </span>
                    <span className="me-3">
                    <i className="fas fa-birthday-cake me-2"></i>
                    Born {profile.dateOfBirth}
                </span>
                    <span>
                    <i className="far fa-calendar me-2"></i>
                    Joined {profile.dateJoined}
                </span>
                </div>
                <div className="d-flex flex-row mt-3">
                    <span className="fw-bolder wd-bio h9 me-1 ">{profile.followingCount}</span>
                    <span className="text-muted me-4">Following</span>
                    <span className="fw-bolder wd-bio h9 me-1">{profile.followersCount}</span>
                    <span className="text-muted">Followers</span>
                </div>
            </div>


        </div>
    );
}


export default ProfileScreen;