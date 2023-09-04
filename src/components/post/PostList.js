import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

const PostList = () => {
    const posts = useSelector(({ post }) => post.posts);

    return (
        <div className="grid justify-center gap-4 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
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
