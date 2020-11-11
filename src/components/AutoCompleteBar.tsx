import { UserInfo } from '../states/states';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../reducers';
import { getUsers } from '../actions/actions';

interface itemType{
    id:number
    name:string,
    
}


export const AutoCompleteBar: React.FC = () =>{


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
     }, [])
    const usersState = useSelector((state:RootStore) => state.users)
    let items:itemType[] = [];
    const funct = () =>{
        usersState.users.forEach(function (user) {
            let x:itemType = {
                id: user.id,
                name: `${user.firstName} ${user.lastName}`
            }
            items.push(x);
        })
        return items;
    };
    funct();
    //const items = ["David", "Damien", "Sara", "Jane"];
    const [suggestions, setSuggestions] = useState<itemType[]>([])
    const [text, setText] = useState<string>("");

    const onTextChanged = (e:any) =>{
        const value = e.target.value;
        let suggs: itemType[] = [];
        if(value.length >0){
            const regex = new RegExp(`^${value}`, 'i');
            suggs = items.sort((a,b) =>{
                        if(a.name > b.name){
                            return 1;
                        } else if(a.name < b.name){
                            return -1;
                        }
                        return 0;
                     })
            suggs = suggs.filter(v=>regex.test(v.name));
        }
        setSuggestions(suggs);
        setText(value);
    }

    const suggestionSelected = (value:itemType)=>{
        setText(value.name);
        setSuggestions([]);
        
    }

    const renderSuggestions= () =>{
        if(suggestions.length ===0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item:itemType) => <li onClick={() => suggestionSelected(item)} key={item.id}>{item.name}</li>)}
            </ul>
        )
    }

    return (
        <>
            <div className="AutoCompleteText">
                <input value = {text} onChange = {onTextChanged} type="text" placeholder="Search Users..."/>
                {renderSuggestions()}
            </div>
        </>
    )



}