const PostItem = ({ post }) => {
    return (
        <a href={`/createPost/${post.id}`}>
            <label className="text-xs font-semibold text-mfa-gray">card-body</label>
            <div className="block max-w-sm p-6 bg-white rounded-lg cursor-pointer hover:bg-gray-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post?.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post?.body}</p>
            </div>
        </a>
    );
};

export default PostItem;
