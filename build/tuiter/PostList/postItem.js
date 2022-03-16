
const postItem = (post) => {
    return (`
        <div class="wd-post-item">
            <img src="${post.userImage}" class="wd-post-avatar">
            <div class="wd-post-post">
                <div class="wd-post-metadata">
                    <div class="wd-post-author-name pe-1">
                        ${post.userName}
                    </div>
                    <i class="fa fa-check-circle mt-1 pe-1"></i>
                    <div class="wd-post-author-handle text-muted">
                        ${post.handle}
                    </div>
                    <div class="wd-post-timestamp text-muted">
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
                    ${post.previewTitle !== '' ? ` <div class="wd-post-preview-thumbnail p-2">
                        <div class="wd-preview-thumbnail-title ">
                            ${post.previewTitle}
                        </div>
                        <div class="wd-preview-thumbnail-text text-muted">
                            
                            ${post.note}
                        </div>
                        <div class="wd-preview-thumbnail-text text-muted">
                            <i class="fa fa-link"></i>
                            ${post.link}
                        </div>
                    </div>`:""}
                   
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
                            <i class="far fa-heart wd-action-icon"></i>
                            <span class="wd-action-text">${post.likes}</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" ">
                            <i class="fas fa-upload wd-action-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default postItem;