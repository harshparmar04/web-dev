import post from "./post.json";
import postItem from "./postItem.js";

const postList = () => {
    return (
        post.map((p) => {
           return <postItem post={p} />;
        })
    );
};

export default postList;