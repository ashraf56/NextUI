import getallProducts from '@/utlis/getallProducts';
import React from 'react';
import Retable from './Retable';
import getdummyData from '@/utlis/getdummyData';

const VideoPlayer = async () => {
let {products} = await getdummyData()
let coldata= ['title', 'price', 'category','discountPercentage']
    return (
        <div className='mt-1  '>
            <Retable columns={coldata} users={products}></Retable>
        </div>
    );
};

export default VideoPlayer;