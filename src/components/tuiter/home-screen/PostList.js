import post from "./Post.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
        post.map((p) => {
            return (
                <PostItem post={p} key = {p.title}/>
            )
        })
    );
};

export default PostList;