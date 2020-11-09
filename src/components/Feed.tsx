import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed } from '../actions/actions';
import { RootStore } from '../reducers';
import { Post } from "./Post";


//Id of the profile's user. if it's 0, then it's the home page feed so all posts should be shown. 
interface IProps {
    id?: number
}


export const Feed: React.FC<IProps> = (props:IProps) =>{
 
    const dispatch = useDispatch();
    const feedState = useSelector((state:RootStore) => state.posts)

    //this should run once to load the posts. 
    useEffect(() => {
       dispatch(getFeed)
    }, [])

    return (
        <>
    
        <div className="mb-5">
            {feedState.posts.map((e:any, i:number) => {
                <Post id={i}/>
            })}
        </div>
        </>
    )
}