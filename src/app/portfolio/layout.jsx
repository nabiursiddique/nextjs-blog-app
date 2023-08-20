import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='mt-5 mb-3'>
            <h1 className='text-7xl font-bold m-5'>Our Works</h1>
            {children}
        </div>
    );
};

export default Layout;