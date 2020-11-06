import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { RootStore } from '../reducers';
import {getSearch} from '../actions/actions'


/**
 * This currently has its own reducer and action, but I think it should
 * eventually just call the profile component's reducer/action. 
 */
export  const SearchBar= ()=> {

    const dispatch = useDispatch();
    const [search ,setSearch] = useState("");
    const searchState = useSelector((state:RootStore) => state.search);
    //console.log(searchState);

    const handleChange = (e:any) =>{
        setSearch(e.target.value);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //console.log("Submitted" + search)
        dispatch(getSearch(search));
    }

    //useEffect(()=> (console.log(search)),[search]);









    return (
        <>
            <Form inline onSubmit={handleSubmit}>
                <Form.Control onChange={handleChange} id="searchBar" placeholder="Search Users..."/>
            </Form>
            {/* <input type="text" placeholder="Search Users..."/> */}
        </>
    )
}
