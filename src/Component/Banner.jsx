"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router=useRouter();

    const handleBtn=()=>{
        const password=prompt('Enter your password:');

        if(password==='1234'){
            // console.log(router);
            router.push('/dashboard');
        }
    }

    return (
        <div className='bg-sky-300 text-black p-10 rounded text-center space-y-5'>
            <h2 className='text-4xl font-bold'>Welcome to Dev-Story</h2>
            <button onClick={handleBtn} className='bg-white text-sky-300 hover:bg-gray-200 font-bold py-2 px-4 rounded'>
                Share story
            </button>
        </div>
    );
};

export default Banner;