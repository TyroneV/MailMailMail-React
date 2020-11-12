
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../reducers';
import { getUsers, otherUser } from '../actions/actions';
import { useHistory } from "react-router";
import { UserInfo } from '../states/states';

interface itemType {
    id: number
    name: string,

}


export const AutoCompleteBar: React.FC = () => {

    const history = useHistory();
    const [selected, setSelected] = useState(-1);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selected !== -1) {
            dispatch(otherUser(selected));
            history.push("/other");
        }
    }, [dispatch, selected, history])

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    const usersState = useSelector((state: RootStore) => state.users)
    let items: itemType[] = [];
    const funct = () => {

        function isRealUser(element:UserInfo, index:number, array:any) {
            return (element.id !== 23 && element.id !== 15);
        } 
        const filtUsers: UserInfo[] = usersState.users.filter(isRealUser);

        filtUsers.forEach(function (user) {
            let x: itemType = {
                id: user.id,
                name: `${user.firstName} ${user.lastName}`
            }
            items.push(x);
        })
        return items;
    };

    //maybe move funct into a useEffect with a dependency on usersState. 
    funct();
    const [suggestions, setSuggestions] = useState<itemType[]>([])
    const [text, setText] = useState<string>("");

    const onTextChanged = (e: any) => {
        const value = e.target.value;
        let suggs: itemType[] = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggs = items;
            suggs.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
            suggs = suggs.filter(v => regex.test(v.name));
        }
        setSuggestions(suggs);
        setText(value);
    }

    function suggestionSelected(value: itemType): any {
        setText(value.name);
        setSuggestions([]);
        setSelected(value.id);

    }


    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item: itemType) => <li onClick={() => suggestionSelected(item)} key={item.id}>{item.name}</li>)}
            </ul>
        )
    }

    return (
        <>
            <div className="AutoCompleteText">
                <input value={text} onChange={onTextChanged} type="text" placeholder="Search Users..." />
                {renderSuggestions()}
            </div>
        </>
    )



}