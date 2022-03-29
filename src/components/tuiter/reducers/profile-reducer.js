import profile from "../data/profile.json"

const ProfileReducer = (state = profile, action) => {
    console.log("before save-edit");
    if (action.type === 'save-edit') {
        console.log("save-edit" + JSON.stringify(action.data));
        return action.data;
    }

    return profile;
}

export default ProfileReducer;