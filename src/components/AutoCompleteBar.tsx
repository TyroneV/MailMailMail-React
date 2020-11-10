import { UserInfo } from '../states/states';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../reducers';
import { getUsers } from '../actions/actions';



export const AutoCompleteBar: React.FC = () =>{


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
     }, [])
    const usersState = useSelector((state:RootStore) => state.users)
    let items:string[] = [];
    const funct = () =>{
        usersState.users.forEach(function (user) {
            items.push(`${user.firstName} ${user.lastName}`);
        })
        return items;
    };
    funct();
    //const items = ["David", "Damien", "Sara", "Jane"];
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [text, setText] = useState<string>("");

    const onTextChanged = (e:any) =>{
        const value = e.target.value;
        let suggs: string[] = [];
        if(value.length >0){
            const regex = new RegExp(`^${value}`, 'i');
            suggs = items.sort().filter(v=>regex.test(v));
        }
        setSuggestions(suggs);
        setText(value);
    }

    const suggestionSelected = (value:string)=>{
        setText(value);
        setSuggestions([]);
    }

    const renderSuggestions= () =>{
        if(suggestions.length ===0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item:string) => <li onClick={() => suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    return (
        <>
            <div className="AutoCompleteText">
                <input value = {text} onChange = {onTextChanged} type="text"/>
                {renderSuggestions()}
            </div>
        </>
    )



}