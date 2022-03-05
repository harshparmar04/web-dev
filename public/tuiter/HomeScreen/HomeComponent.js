import postList from "../PostList/postList.js";

const HomeComponent = () => {
    return(`
            <ul class="list-group">
                ${(postList())}
            </ul>
    `);
};

export default HomeComponent;
