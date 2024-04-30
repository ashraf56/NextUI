import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import CourseOutline from '../compo/CourseOutline';

const CourseDetailpageLayout = ({ children }) => {
    return (
        <div>
            <div className='  md:flex md:flex-row-reverse gap-2 p-5 mx-auto bg-black text-white'>
                <div className=' w-full md:w-[75%]'>{children}</div>
                <div className='w-full md:w-[25%]'>
                    <h1 className='font-bold text-xl pb-2'>Course content</h1>
                    <ScrollShadow className=' h-[100vh]'>
                        <CourseOutline></CourseOutline>
                    </ScrollShadow>

                </div>
            </div>
        </div>
    );
};

export default CourseDetailpageLayout;