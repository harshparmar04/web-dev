import postList from "../PostList/postList.js";
import post from "../PostSummaryList/Posts.js";

const HomeComponent = () => {
    return(`
        <ul class="list-group">
            ${
                post.map((p) => {
                    return (postList(p))
                }).join("")
            }
        </ul>
    `);
};

export default HomeComponent;
