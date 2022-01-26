import React from "react";

const PostListTitleEndErrors = ({ posts, postError, isPostsLoading }) => {
    if (postError) {
        return (
            <div>
                <h1 style={{ color: "red" }}>
                    <i style={{ color: "black" }}>error: </i>
                    {postError}
                </h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>
                    {" "}
                    {posts.length || isPostsLoading ? "Posts" : "Posts not found"}
                </h1>
            </div>
        );
    }
};

export default PostListTitleEndErrors;
