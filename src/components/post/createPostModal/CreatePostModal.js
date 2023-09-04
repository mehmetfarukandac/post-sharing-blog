import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PostForm from '../PostForm'
import Swal from 'sweetalert2'
import Button from '../../common/button'
import { TrashIcon } from "@heroicons/react/24/solid";
import { createPost } from '../../../services/axios'
import Logo from '../../header/Logo'

export default function CreatePostModal({  open,  setOpen }) {

    const cancelButtonRef = useRef(null)
    const [postValues, setPostValues] = useState({
        title: "",
        body: "",
    });
    const inputOnChange = (e) => {
        e.preventDefault();
        setPostValues({
            ...postValues,
            [e.target.name]: e.target.value,
        });
    }


    const onCreatePostHandler = () => {

        createPost(postValues.title, postValues.body, 1).then((result) => {
            console.log("resultresultresult:  ", result);
            Swal.fire({
                title: 'Great!',
                text: ` Your post has been successfully shared. id: ${result.message.id}`,
                icon: 'success',
                confirmButtonText: 'Tamam',
                confirmButtonColor: "#0971CE"
            })
        })
            .catch((error) => {
                console.error(error);
            }); 
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="flex items-center justify-center mx-auto gap-x-2">
                                        <Logo />
                                        <span className='text-2xl font-bold'>Arbit Blog</span>
                                    </div>
                                    <PostForm
                                        inputOnChange={inputOnChange}
                                        postValues={postValues}
                                    />
                                </div>
                                <div className="flex mt-5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                                    <Button onClickHandler={onCreatePostHandler} className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 rounded-md shadow-sm bg-mfa-blue ring-1 ring-inset ring-gray-300 hover:bg-mfa-blue/80 sm:col-start-1 sm:mt-0"
                                        text="Save" />
                                    <Button
                                        onClickHandler={() => setOpen(false)}
                                        className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 rounded-md shadow-sm bg-mfa-red ring-1 ring-inset ring-gray-300 hover:bg-mfa-red/80 sm:col-start-1 sm:mt-0"
                                        ref={cancelButtonRef}
                                        icon={<TrashIcon className="w-4 h-4 text-white" />} text="Cancel" />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
