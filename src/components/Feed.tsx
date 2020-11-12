import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed } from '../actions/actions';
import { RootStore } from '../reducers';
import { Post } from "./Post";
import {PostInfo, LikeInfo} from '../states/states';


//Id of the profile's user. if it's 0, then it's the home page feed so all posts should be shown. 
interface IProps {
    id?: number
}


export const Feed: React.FC<IProps> = (props:IProps) =>{
 
    const dispatch = useDispatch();
    const feedState = useSelector((state:RootStore) => state.feed)
    //this should run once to load the posts. 
    useEffect(() => {
        props.id?dispatch(getFeed(0)):dispatch(getFeed(0));
    }, [dispatch, props.id])

    

    return (
        <>
        {feedState.postsAndLikes && (
            <div className="mb-5">
                {feedState.postsAndLikes.map((e:[PostInfo, LikeInfo[]], i:number) => {
                    return (<Post id={i} key={i}/>)
                })}
            </div>

        )}
        </>
    )
}