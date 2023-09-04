import React from "react";
import PostCommentItem from "./PostCommentItem";

const PostCommentList = ({ postComments }) => {

    return (
        <div className="grid max-h-screen grid-cols-1 overflow-y-scroll">
            {
                (postComments.length > 0) ? (
                    <>
                        {postComments?.map((comment, index) => (
                            <PostCommentItem key={comment.id} comment={comment} />
                        ))}
                    </>
                ) : (
                    <>Loading...</>
                )
            }
        </div>
    );
};

export default PostCommentList;
