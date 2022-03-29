import profile from "../data/profile.json"

const ProfileReducer = (state = profile, action) => {
    if (action.type === 'save-edit') {
        return action.data;
    }

    return profile;
}

export default ProfileReducer;