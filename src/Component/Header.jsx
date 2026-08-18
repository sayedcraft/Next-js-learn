import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="px-4 py-3 border-b-2 border-gray-300 flex justify-between items-center flex-wrap">
            <Link className="text-2xl font-bold" href="/">
                Dev-Story
            </Link>
            <div className="space-x-4">
                <Link href="/about">About</Link>
                <Link href="/stories">Stories</Link>
                <Link href="/tutorials">Tutorials</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </header>
    );
};

export default Header;