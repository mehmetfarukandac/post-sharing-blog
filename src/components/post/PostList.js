import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

const PostList = () => {
    const posts = useSelector(({ post }) => post.posts);

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                posts.length > 0 ? (
                    <>
                        {posts?.map((post, index) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </>
                ) : (
                    <>Loading...</>
                )
            }
        </div>
    );
};

export default PostList;
