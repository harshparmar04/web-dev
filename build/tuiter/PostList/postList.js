import post from "./post.js";
import postItem from "./postItem.js";

const postList = () => {
    return (
        post.map((p) => {
           return postItem(p);
        }).join("")
    );
};

export default postList;