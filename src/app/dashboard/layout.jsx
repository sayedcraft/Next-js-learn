import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <div className='flex flex-col gap-5'>
                    <Link className='bg-amber-200 font-bold rounded-2xl p-3 mr-5 text-black' href={'/dashboard/add-story'}>Add story</Link>
                    <Link className='bg-amber-200 font-bold rounded-2xl p-3 mr-5 text-black' href={'/dashboard/my-profile'}>My profile</Link>
                    <Link className='bg-amber-200 font-bold rounded-2xl p-3 mr-5 text-black' href={'/dashboard/setting'}>Setting</Link>
                    <Link className='bg-amber-200 font-bold rounded-2xl p-3 mr-5 text-black' href={'/dashboard'}>Go to dashboard</Link>
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    );
};

export default DashboardLayout;