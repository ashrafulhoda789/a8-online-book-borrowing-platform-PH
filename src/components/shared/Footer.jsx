'use client';

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <Link href={'/'} className="flex items-center justify-center rounded-full text-xl">
                    <Image
                        src={"/logo-nav.png"}
                        alt="logo"
                        loading="eager"
                        width={60}
                        height={60}
                        className="object-cover rounded-full h-auto w-auto"
                    />
                </Link>
                    <p className="mt-3 text-sm">
                        Discover, borrow, and explore thousands of books across different categories.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                    <p>Email: support@onlinebookborrow.com</p>
                    <p>Phone: +880 1818299406</p>
                    <p>Address: Chattogram, Bangladesh</p>
                </div>


                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm">
                ©2026 Online Book Borrowing Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;