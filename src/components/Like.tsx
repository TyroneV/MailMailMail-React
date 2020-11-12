import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteLike, makeLike } from '../actions/actions';
import { RootStore } from '../reducers';
import { LikeInfo, PostInfo, UserState } from '../states/states'

interface IProps {
    post: PostInfo,
    like: LikeInfo[]
}

export const Like: React.FC<IProps> = (props: IProps) => {

    const dispatch = useDispatch();

    const currUser: UserState = useSelector((state: RootStore) => state.login);

    const [like, setlike] = useState<any>();
    const [chosen, setChosen] = useState(false);
    const [up, setUp] = useState(false);
    const [num, setNum] = useState(0);


    useEffect(() => {
        if (chosen) {
            if (!up) {
                dispatch(deleteLike(like))
                setNum(num-1);
            } else {
                dispatch(makeLike(props.post));
                setNum(num+1);
            }
            if(num <0) {
                setNum(0);
            }
        }
    }, [up]);


    const handleLike = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (up) {
            e.currentTarget.src = "/images/thumbsUP.svg";
            setUp(false)
            setChosen(true);
        } else {
            e.currentTarget.src = "/images/thumbsUP_active.svg";
            setUp(true);
            setChosen(true);

        }
    }

    function likeButton() {
        if (props.like && !like) {
            let i;
            for (i in props.like) {
                if (props.like[i].authorId === currUser.id) {
                    setlike(props.like[i]);
                    setUp(true);
                    return (<input
                        type="image"
                        src="/images/thumbsUP_active.svg"
                        width="30"
                        className="d-inline"
                        alt="Like button"
                        onClick={handleLike}
                    />)
                }
            }
        }
        if(like){
            return (<input
                type="image"
                src="/images/thumbsUP_active.svg"
                width="30"
                className="d-inline"
                alt="Like button"
                onClick={handleLike}
            />)

        }
        return (
            <input
                type="image"
                src="/images/thumbsUP.svg"
                width="30"
                className="d-inline"
                alt="Like button"
                onClick={handleLike}
            />
        )
    }

    function likeCount () {
        if(num != props.like.length && !chosen){
            setNum(props.like.length);
        }
        return(            
            <h6 className="m-2 d-inline">{num}</h6>
        )
    }



    return (
        <>
            {likeButton()}
            {likeCount()}
        </>
    )

}