import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./edit-profile.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router';

const EditScreen = () => {
    const stateProfile = (state) => state.profile;
    const profile = useSelector(stateProfile);
    const [changes, applyChanges] = useState(profile);
    const navigate = useNavigate();

    const onChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      if (field === 'name') {
          const names = value.split(" ");
          return applyChanges({...changes, ["firstName"] : names[0], ["lastName"] : names[1]})
      }
      applyChanges({...changes, [field] : value});
    };

    const dispatch = useDispatch();

    const onSaveClick = () => {
        console.log("invoking on save" + changes);
      dispatch({
          type: "save-edit",
          data: changes
      });
      navigate('/tuiter/profile');
    }


    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between mb-2">
                <span className="d-flex flex-row mt-1">
                    <Link to="/tuiter/profile">
                        <i className="fa fa-times wd-cancel-edit"></i>
                    </Link>
                    <h5 className="ms-4 mt-1">Edit Profile</h5>
                </span>
                    <button className="btn btn-primary wd-save fw-bold" onClick={onSaveClick}>Save</button>
            </div>
            <img className="row" src={profile.bannerPicture} />

            <div>
                <div className="row wd-edit-profile-row ">
                    <img className="wd-profile-image" src={profile.profilePicture} />
                </div>
                <div className="d-flex flex-column mt-3">
                    <label htmlFor="name" className="text-muted">Name</label>
                    <input className="form-control" onChange={onChange} id="name" name="name" defaultValue={profile.firstName + " " + profile.lastName}/>
                </div>
                <div className="d-flex flex-column  mt-3">
                    <label htmlFor="bio" className="text-muted">Bio</label>
                    <textarea id="bio" name="bio" onChange={onChange} defaultValue={profile.bio}/>
                </div>
                <div className="d-flex flex-column mt-3">
                    <label htmlFor="location" className="text-muted">Location</label>
                    <textarea id="location" name="location" onChange={onChange} defaultValue={profile.location}/>
                </div>
                <div className="d-flex flex-column  mt-3">
                    <label htmlFor="website" className="text-muted">Website</label>
                    <textarea id="website"  name = "website" onChange={onChange} defaultValue={profile.website}/>
                </div>
                <div className="d-flex flex-column mt-3">
                    <label htmlFor="dateOfBirth" className="text-muted">Date of Birth</label>
                    <textarea id="dateOfBirth" name = "dateOfBirth" onChange={onChange} defaultValue={profile.dateOfBirth}/>
                </div>
            </div>


        </div>
    );
}


export default EditScreen;