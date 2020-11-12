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
    //const [num, setNum] = useState(0);


    useEffect(() => {
        if (chosen) {
            if (!up) {
                console.log("This is the like to be deleted: ");
                console.log(like);
                dispatch(deleteLike(like))
                setChosen(false);
            } else {
                dispatch(makeLike(props.post));
                setChosen(false);
            }
        }
    }, [dispatch, props.post,chosen,up, like]);


    const handleLike = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (up) {
            e.currentTarget.src = "/images/thumbsUP.svg";
            setUp(false)
            setChosen(true);
            // if(num !== 0) {
            //     console.log("before: " + num);
            //     console.log("-1");
            //     setNum(num-1);
            // }

        } else {
            e.currentTarget.src = "/images/thumbsUP_active.svg";
            setUp(true);
            setChosen(true);
            // console.log("before: " + num);
            // console.log("+1");
            // setNum(num+1);

        }
    }

    function likeButton() {
        if (props.like && !like) {
            let i;
            for (i in props.like) {
                if (props.like[i].authorId === currUser.id) {
                    setlike(props.like[i]);
                    console.log("This is the like from the db:");
                    console.log(props.like[i]);
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
        // if(num !== props.like.length && !chosen){
        //     console.log("runs");
        //     setNum(props.like.length);
        // }
        return(            
            <h6 className="m-2 d-inline">{props.like.length}</h6>
        )
    }



    return (
        <>
            {likeButton()}
            {likeCount()}
        </>
    )

}