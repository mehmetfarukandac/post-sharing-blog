import { ArrowLongLeftIcon, PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import Button from "../common/button";
import Layout from "./layout";
import Swal from 'sweetalert2'
import CreatePostModal from "../post/createPostModal/CreatePostModal";
import PostForm from "../post/PostForm";
import { deletePost, updatePost } from "../../services/axios";

const CreatePost = () => {
    const { id } = useParams();
    const posts = useSelector(({ post }) => post.posts);
    const [selectedPost, setSelectedPost] = useState({});
    const [openCreateModal, setOpenCreateModal] = useState(false);

    const [postValues, setPostValues] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        if (posts) {
            setSelectedPost(posts.find((post) => parseInt(post.id) === parseInt(id)));
            setPostValues({
                title: selectedPost?.title,
                body: selectedPost?.body,
            })
        }
    }, [posts, id, selectedPost]);

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
                deletePost(parseInt(id)).then((result) => {
                    Swal.fire({
                        title: 'Great!',
                        text: ` Your post has been successfully deleted. id: ${result.message.id}`,
                        icon: 'success',
                        confirmButtonText: 'Okay, thanksss',
                        confirmButtonColor: "#0971CE"
                    })
                })
                    .catch((error) => {
                        // Hata durumunu işle
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
            <div className="w-3/5 px-8">
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
            {openCreateModal && <CreatePostModal
                posts={posts}
                id={id}
                open={openCreateModal} setOpen={setOpenCreateModal} />}
        </Layout>
    );
}

export default CreatePost;



