import React from 'react';
import { Post } from "./Post";


export const Feed: React.FC = () =>{
    return (
        <>

        {/* Post Here */}
        <div className="mb-5">
        <Post/>
        </div>
        <div className="mb-5">
        <Post/>
        </div>
        </>
    )
}