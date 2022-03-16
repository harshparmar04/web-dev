import post from "./Post.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
        post.map((p) => {
            return (
                <PostItem post={p}/>
            )
        })
    );
};

export default PostList;