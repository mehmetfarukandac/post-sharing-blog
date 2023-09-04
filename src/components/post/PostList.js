import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

const PostList = () => {
    const posts = useSelector(({ post }) => post.posts);

    useEffect(() => {
        console.log("postsposts:  ", posts);
    }, [posts]);

    return (
        <div className="grid grid-cols-3 gap-4">
            {posts?.map((post, index) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
