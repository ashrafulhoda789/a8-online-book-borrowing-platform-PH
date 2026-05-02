'use client'

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/all-books'}>All Books</Link></li>
        <li><Link href={'/'}>My Profile</Link></li>
    </>

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="flex items-center justify-center rounded-full text-xl">
                    <Image
                        src={"/logo-nav.png"}
                        alt="logo"
                        loading="eager"
                        width={60}
                        height={60}
                        className="object-cover h-auto w-auto"
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    isPending ? <span className="loading loading-spinner loading-md"></span> :
                        user ? (
                            <div className="flex gap-5 items-center ">
                                <div className="hidden md:flex items-center gap-3">
                                    <h2 className="text-lg font-bold">Hello, {user?.name}</h2>
                                    <Image className="rounded-full" src={user?.image} alt="user avatar" width={40} height={40}></Image>
                                </div>
                                <button className="btn btn-primary" onClick={async () => await authClient.signOut()}>Logout</button>
                            </div>
                        ) :
                            (
                                <Link href={'/login'}>
                                    <button className="btn btn-success">Login</button>
                                </Link>
                            )
                }

            </div>
        </div>
    );
};

export default Navbar;