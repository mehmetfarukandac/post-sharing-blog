import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, BellIcon, Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Avatar from './Avatar'
import Logo from './Logo'
import { useSelector } from 'react-redux'

const navigation = [
    { name: 'Posts', href: '/', icon: false },
    { name: 'Features', href: '/', icon: <BellIcon className="w-6 h-6 text-mfa-dark-gray" aria-hidden="true" /> },
    { name: 'Marketplace', href: '/', icon: <Squares2X2Icon className="w-6 h-6 text-mfa-dark-gray" aria-hidden="true" /> },
]

const HeaderPosts = ({ item, posts }) => {
    return (
        <div className='flex gap-x-2'>
            <a
                href={item.href}
                className="flex px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg gap-x-2 hover:bg-gray-50"
            >
                {item.name}
                <span className="inline-flex items-center p-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                    {posts.length}
                </span>
            </a>
        </div>
    )
}

export default function Header() {
    const posts = useSelector(({ post }) => post.posts);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="flex items-center justify-between p-4 mx-auto" aria-label="Global">
                <a href="/" className="-m-1.5 p-1.5 flex items-center gap-x-4 text-2xl font-bold">
                    <Logo />
                    <span>Arbit Blog</span>
                </a>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="items-center justify-center hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <div key={item.name}>
                            {
                                !(item?.icon === false) ? (
                                    <>
                                        {item.icon}
                                    </>
                                ) : (
                                    <HeaderPosts
                                        item={item}
                                        posts={posts}
                                    />
                                )
                            }
                        </div>
                    ))}
                    <Avatar />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {
                                            !(item?.icon === false) ? (
                                                <>
                                                    {item.icon}
                                                </>
                                            ) : (
                                                <HeaderPosts
                                                    item={item}
                                                    posts={posts}
                                                />
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                            <div className="py-6">
                                <Avatar />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
