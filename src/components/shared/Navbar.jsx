import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/all-books'}>All Books</Link></li>
        <li><Link href={'/'}>My Profile</Link></li>
    </>
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
                <Link href={'/'} className="bg-green-50 flex items-center justify-center rounded-full text-xl">
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
                <Link href={'/auth/login'}>
                    <button className="btn btn-success">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;