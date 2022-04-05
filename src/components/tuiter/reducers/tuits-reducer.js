//import tuits from "../data/tuits.json"
import profile from "../data/profile.json";
import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../actions/tuits-actions";

const tuitReducer =
    (state = [], action) => {
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

            case FIND_ALL_TUITS:
                return action.tuits;

            case CREATE_TUIT:
                return [
                    action.newTuit,
                    ...state
                ];

            case DELETE_TUIT:
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);

            case UPDATE_TUIT:
                return state.map(
                    tuit => tuit._id === action.tuit._id ?
                        action.tuit : tuit);

            default:
                return state
        }
    }

export default tuitReducer;
