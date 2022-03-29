import tuits from "../data/tuits.json"
import profile from "../data/profile.json";

const tuitReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'like-tuit':
                return state.map(tuit => {
                    if (tuit._id === action.id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });


            case 'delete-tuit':
                return state.filter(
                    tuit => tuit._id !== action.id);
            case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": profile.firstName + " " + profile.lastName
                    },
                    "logo-image": profile.profilePicture,
                    "avatar-image": profile.profilePicture,
                    handle: profile.handle,
                    stats: {
                        retuits: 546,
                        likes: 795,
                        comments: 442
                    },
                    time: "now"
                }
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }

export default tuitReducer;
