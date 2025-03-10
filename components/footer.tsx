import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { GITHUB_USERNAME, TWITTER_USERNAME, DISCORD_INVITE } from "@/constants";

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-bold">
                            Kewi
                        </Link>
                        <p className="text-gray-400 mt-2">
                            © {new Date().getFullYear()} All Rights Reserved
                        </p>
                    </div>
                    
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </nav>
                    
                    <div className="flex space-x-4">
                        <Link href={"https://github.com/" + GITHUB_USERNAME} className="hover:text-gray-300">
                            <FaGithub size={20} />
                        </Link>
                        <Link href={"https://twitter.com/" + TWITTER_USERNAME} className="hover:text-gray-300">
                            <FaTwitter size={20} />
                        </Link>
                        <Link href={DISCORD_INVITE} className="hover:text-gray-300">
                            <FaDiscord size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;