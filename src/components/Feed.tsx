import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Post } from "./Post";


//Id of the profile's user. if it's 0, then it's the home page feed so all posts should be shown. 
interface IProps {
    id?: number
}


export const Feed: React.FC<IProps> = (props:IProps) =>{
 
    const dispatch = useDispatch();
    

    //this should run once to load the posts. 
    useEffect(() => {
        if(props.id){

        }

    }, [])

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