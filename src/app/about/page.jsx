import Title from '@/Component/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>from about page</Title>
            <nav className='flex justify-center gap-4 mt-4'>
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/teams">Teams</Link>
            </nav>
        </div>
    );
};

export default About;