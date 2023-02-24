import React from "react";
import Post from "../post/Post";

function PostItem ({posts}) {
    return (
        <div>
            {posts.map((post) => <Post post={post}></Post> )}
        </div>
    )
}

export default PostItem;