
const postItem = (post) => {
    return (`
        <li class="wd-post-item">
            <img src="${post.userImage}" class="wd-post-avatar">
            <div class="wd-post-post">
                <div class="wd-post-metadata">
                    <div class="wd-post-author-name">
                        ${post.userName}
                    </div>
                    <div class="wd-post-author-handle">
                        ${post.handle}
                    </div>
                    <div class="wd-post-timestamp">
                        &nbsp;${post.time}
                    </div>
                </div class="wd-post-metadata">
                <div class="wd-post-content">
                    ${post.title}
                </div>
                <div class="wd-post-preview">
                    <div class="wd-post-preview-image">
                        <img class="wd-post-preview-image" src="${post.image}">
                    </div>
                    <div class="wd-post-preview-thumbnail">
                        <div class="wd-preview-thumbnail-title">
                            ${post.previewTitle}
                        </div>
                        <div class="wd-preview-thumbnail-text">
                            ${post.note}
                        </div>
                    </div>
                </div>

                <div class="wd-post-action-options">
                    <div>
                       <a href="#" class="wd-action-hyperlink">
                           <i class="far fa-comment wd-action-icon"></i>
                            <span class="wd-action-text">${post.comments}</span>
                       </a>
                    </div>

                    <div>
                        <a href="#" class="wd-action-hyperlink">
                            <i class="fas fa-retweet wd-action-icon"></i>
                            <span class="wd-action-text">${post.retuits}</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" class="wd-action-hyperlink">
                            <i class="far fa-heart fas wd-action-icon-like"></i>
                            <span class="wd-like-action-text">${post.likes}</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" class="wd-action-hyperlink">
                            <i class="fa-solid fa-arrow-up-from-bracket wd-action-icon "></i>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    `);
};

export default postItem;