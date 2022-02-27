import React,{useContext,useRef,useState,useEffect} from 'react';
//import {setHideComponent } from '../App';
import {POST_API_CAT,DELETE_API_CAT,POST_API_TODO, GET_API_CATS } from '../config';
import { toDoContext } from '../contexts/toDoContext';

import { TYPES } from '../utils/operations';

//Dashboard
export const CategoryForm = ({changeState}) => {
    
    const formRef = useRef(null);
    const { dispatch, state } = useContext(toDoContext);
    
    //const item = category.item;
    //state,setState
    const [catStatus, setCatStatus] = useState('');

    /*useEffect(() => {
      changeState(false);
      //http://127.0.0.1:8080/api/categories/all 
      fetch(GET_API_CATS)
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: TYPES.GET_CATS, list })
        })
    }, [dispatch]);*/


    const onAdd = (event) => {
      event.preventDefault();
      //changeState(false);

      const request = {
        name: catStatus.name,
        id: null
      };  
  
      fetch(POST_API_CAT, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {          
          dispatch({ type: TYPES.ADD_CAT, item: todo });          
          setCatStatus({ name: "" });          
          formRef.current.reset();
        });
      
    }
    
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="Add-Category"
        //defaultValue={item.name}
        onChange={(event) => {
          setCatStatus({ ...catStatus, name: event.target.value })
        }} ></input>
      
     <button onClick={onAdd}>Nueva Lista</button>
      
    </form>
}

//N-Categoria: El que tiene lo que se anida
