import Retable from '@/app/compo/Retable';
import getComments from '@/utlis/getComments';
import React from 'react';

const page = async () => {
    let comment = await getComments()
    let colData = ['it','name', 'email', 'body']
    return (
        <div>
            <Retable columns={colData} users={comment}></Retable>
        </div>
    );
};

export default page;