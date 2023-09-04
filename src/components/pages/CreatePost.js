import { ArrowLongLeftIcon, PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../common/button";
import Layout from "./layout";
import Swal from 'sweetalert2'
import CreatePostModal from "../post/createPostModal/CreatePostModal";
import PostForm from "../post/PostForm";
import { deletePost, getPostById, postComments, updatePost } from "../../services/axios";
import PostCommentList from "../post/PostCommentList";

const CreatePost = () => {
    const { id } = useParams();
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [commentValues, setCommentValues] = useState([]);


    const [postValues, setPostValues] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        postComments(id).then((result) => {
            setCommentValues(result.message);
        })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    useEffect(() => {
        getPostById(id).then((result) => {
            setPostValues({
                title: result.message?.title,
                body: result.message?.body,
            })
        })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const onDeleteHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#F4024E",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#0971CE",
            confirmButtonText: "I'm sure :)"
        }).then(function (result) {
            if (result.isConfirmed) {
                deletePost(parseInt(id)).then(() => {
                    Swal.fire({
                        title: 'Great!',
                        text: ` Your post has been successfully deleted. id: ${id}`,
                        icon: 'success',
                        confirmButtonText: 'Okay, thanksss',
                        confirmButtonColor: "#0971CE"
                    })
                })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    }

    const inputOnChange = (e) => {
        e.preventDefault();
        setPostValues({
            ...postValues,
            [e.target.name]: e.target.value,
        });
    }

    const onUpdateHandler = () => {
        updatePost(postValues.title, postValues.body, 1, parseInt(id)).then((result) => {
            Swal.fire({
                title: 'Great!',
                text: ` Your post has been successfully updated. id: ${result.message.id}`,
                icon: 'success',
                confirmButtonText: 'Okay',
                confirmButtonColor: "#0971CE"
            })
        })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <Layout>
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
                <div className="col-span-1.5 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <a href="/" className="p-2 rounded-full bg-mfa-gray hover:bg-mfa-dark-gray">
                                <ArrowLongLeftIcon className="w-6 h-6 text-black" aria-hidden="true" />
                            </a>
                            <span className="text-xl font-semibold text-black">Posts</span>
                        </div>
                        <Button onClickHandler={() => setOpenCreateModal(true)} className="bg-mfa-blue hover:bg-mfa-blue/90 focus:ring-4 focus:outline-none focus:ring-mfa-blue/50 " icon={<PlusIcon className="w-5 h-5 text-white" />} text="New Post" />
                    </div>
                    <PostForm
                        inputOnChange={inputOnChange}
                        postValues={postValues}
                    />
                    <div className="flex justify-end mt-16 gap-x-8">
                        <Button onClickHandler={onDeleteHandler} className="bg-mfa-red hover:bg-mfa-red/90 focus:ring-4 focus:outline-none focus:ring-mfa-red/50 " icon={<TrashIcon className="w-4 h-4 text-white" />} text="Delete" />
                        <Button onClickHandler={onUpdateHandler} className="bg-mfa-blue hover:bg-mfa-blue/90 focus:ring-4 focus:outline-none focus:ring-mfa-blue/50 " icon={<PencilIcon className="w-4 h-4 text-white" />} text="Update" />
                    </div>
                </div>
                <div className="col-span-0.5 h-full px-4">
                    <PostCommentList postComments={commentValues} />
                </div>
            </div>
            {openCreateModal && <CreatePostModal
                open={openCreateModal} setOpen={setOpenCreateModal} />}
        </Layout>
    );
}

export default CreatePost;



