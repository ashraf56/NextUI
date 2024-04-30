import React from 'react';
import Sidebar from '../compo/Sidebar';

const DashboardmainLayout = ({children}) => {
    return (
        <div className='h-screen flex gap-2 bg-[#161a1d]'>
            <Sidebar></Sidebar>
            <div className='w-full '>
                {children}
            </div>
        </div>
    );
};

export default DashboardmainLayout;