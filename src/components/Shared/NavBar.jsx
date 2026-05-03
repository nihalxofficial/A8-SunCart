'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Sun, X } from 'lucide-react';
import { FaHome, FaShoppingBasket, FaUser } from 'react-icons/fa';
import { Button, Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user;
    console.log(user);

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = <>
        <Link
            href="/"
            className="text-amber-800 hover:text-sky-600 transition font-medium px-2 py-1 flex justify-start md:justify-between items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
        >
            <FaHome className="text-sky-500" />
            Home
        </Link>
        <Link
            href="/products"
            className="text-amber-800 hover:text-sky-600 transition font-medium px-2 py-1 flex justify-start md:justify-between items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
        >
            <FaShoppingBasket className="text-sky-500" />
            Products
        </Link>
        <Link
            href="/profile"
            className="text-amber-800 hover:text-sky-600 transition font-medium px-2 py-1 flex justify-start md:justify-between items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
        >
            <FaUser className='text-sky-500' />
            My Profile
        </Link>
    </>

    return (
        <nav className="bg-amber-50/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-sky-100">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Sun className="h-8 w-8 text-amber-500 group-hover:text-amber-600 transition-colors" />
                            <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 bg-amber-400 rounded-full transition-opacity"></div>
                        </div>
                        <Link href="/" className="text-2xl font-bold transition group">
                            <span className='text-sky-600 group-hover:text-sky-700'>Sun</span>
                            <span className='text-amber-600 group-hover:text-amber-700'>Cart</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {links}
                    </div>
                    {user ?
                        <div className='hidden md:flex items-center gap-4'>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-linear-to-r from-sky-500 to-amber-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                                <Avatar className="relative">
                                    <Avatar.Image
                                        alt={user?.name || "User"}
                                        src={user?.image}
                                        className="object-cover"
                                    />
                                    <Avatar.Fallback className="bg-linear-to-r from-sky-500 to-cyan-400 text-white">
                                        {user?.name?.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-stone-400">Welcome back,</span>
                                <h2 className="text-sm font-semibold text-stone-700 line-clamp-1 max-w-30">
                                    {user?.name}
                                </h2>
                            </div>

                            <Button
                                className="bg-linear-to-r from-rose-500 to-rose-500 hover:from-rose-600 hover:to-pink-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <MdOutlineLogout size={16} />
                                <span className="text-sm font-medium">Sign Out</span>
                            </Button>
                        </div> :
                        <div className="hidden md:flex items-center gap-3">
                            <Button onClick={() => router.push("/signin")}
                                className="bg-transparent border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:border-sky-600 font-semibold px-6 py-2 rounded-lg transition duration-200"
                            >
                                Sign In
                            </Button>
                            <Button onClick={() => router.push("/signup")}
                                variant='secondary'
                                className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                            >
                                Sign Up
                            </Button>
                        </div>}



                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-amber-600 cursor-pointer hover:text-amber-700 focus:outline-none transition-colors"
                        >
                            {
                                !isMenuOpen ? <Menu size={24} /> : <X size={24} />
                            }
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pb-6 pt-2 bg-amber-50/95 backdrop-blur-sm rounded-lg">
                        <div className="flex flex-col space-y-4 justify-start">
                            {links}
                            <div className="flex flex-col gap-3 pt-2">
                                <Button onClick={() => router.push("/signin")}
                                    className="bg-transparent border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold py-2 rounded-lg transition duration-200 w-full"
                                >
                                    Sign In
                                </Button>
                                <Button onClick={() => router.push("/signup")}
                                    variant='secondary'
                                    className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200 w-full"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;