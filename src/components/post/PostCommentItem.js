import Logo from "../header/Logo";

const PostCommentItem = ({ comment }) => {
    return (
        <div className="relative flex justify-center mt-2">
            <div className="relative grid grid-cols-1 gap-4 p-4 bg-white border rounded-lg shadow-lg">
                <div className="relative flex gap-4">
                    <Logo />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative overflow-hidden text-xl truncate whitespace-nowrap">{comment?.email}</p>
                        </div>
                        <p className="text-sm text-gray-400">20 April 2022, at 14:88 PM</p>
                    </div>
                </div>
                <span className="mb-2 font-semibold">{comment.name}</span>
                <p className="-mt-4 text-gray-500">{comment.body}</p>
            </div>
        </div>);
}

export default PostCommentItem;