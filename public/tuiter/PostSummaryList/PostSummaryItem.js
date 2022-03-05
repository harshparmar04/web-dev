
const PostSummaryItem = (post) => {
  return (`<li class="list-group-item d-flex justify-content-between align-items-center bg-black text-white">
                        <div>
                            <div>
                                <div class="text-muted">${post.topic}</div>
                                <div class="fw-bold">
                                   ${post.userName}
                                    <i class="fa fa-check-circle mt-1"></i><span
                                        class="text-muted">&nbsp; - &nbsp;${post.time}</span>
                                </div>
                                <div class="fw-bold">
                                    <p>
                                        ${post.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img class="wd-post-image" src=" ${post.image}" alt=""/>
                    </li>`);
};

export default PostSummaryItem;