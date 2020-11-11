import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../reducers';
import { LikeInfo, PostInfo, UserState } from '../states/states'

interface IProps {
    post: PostInfo,
    like: LikeInfo[]
}

export const Like:React.FC<IProps> = (props:IProps) =>{
    const dispatch = useDispatch();

    const currUser:UserState = useSelector((state:RootStore) => state.login);

    const handleLike = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) =>{
        e.currentTarget.src = "/images/thumbsUP_active.svg";
        e.currentTarget.disabled = true;
        
    }

    function likeButton () {
        if(props.like){
            let i;
            for(i in props.like){
                if(props.like[i].authorId === currUser.id){
                    return (<input
                        type="image"
                        src="/images/thumbsUP_active.svg"
                        width="30"
                        className="d-inline"
                        alt="Like button"
                        disabled
                />)
                }
            }
        }
        return(
            <input
                    type="image"
                    src="/images/thumbsUP.svg"
                    width="30"
                    className="d-inline"
                    alt="Like button"
                    onClick = {handleLike}
            />
        )
    }



    return (
        <>
            {likeButton()}
            <h6 className="m-2 d-inline">{props.like && props.like.length}</h6>
        </>
    )

}