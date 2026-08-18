import React from 'react';

const Title = ({children}) => {
    return (
        <div className='text-5xl font-bold text-center bg-sky-300 rounded-md text-black p-3'>
            {children}
        </div>
    );
};

export default Title;