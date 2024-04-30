import React from 'react';
import Retable from './Retable';
const getallPost= async() => {
    try {
    
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            cache:'no-cache'
        })
        
        if (!res.ok) {
            throw new Error("data load failed")  
        }
        return res.json()
         } catch (error) {
            console.log(error);
         }
};

const Task = async() => {
    let content = await getallPost()
    let colData= ['userId', 'id', 'title', 'body']
    return (
        <div>
            <Retable columns={colData} users={content}  ></Retable>
        </div>
    );
};

export default Task;