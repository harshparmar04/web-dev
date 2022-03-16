import post from "./Posts.js";
import summaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

    return (`
        <ul class="list-group">
        ${post.map((p) => {
        return (summaryItem(p))
    }).join("")}
        </ul>
    `);
};

export default PostSummaryList;