import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
    //dispatch(getFeed);
    const feedState = useSelector((state:RootStore) => state.posts)

    //this should run once to load the posts. 
    useEffect(() => {
       dispatch(getFeed(0));
    }, [])

    return (
        <>
        {feedState.posts && (
        <div className="mb-5">
            {feedState.posts.map((e:any, i:number) => {
                return <Post id={i}/>
            })}
        </div>

        )}
        </>
    )
}