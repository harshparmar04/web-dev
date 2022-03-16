import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <li class="list-group-item text-white"><h5>Who to follow</h5></li>
            ${who.map((w) => {
                return (WhoToFollowListItem(w));
    }).join("")}
            </ul>`);
}

export default WhoToFollowList;

