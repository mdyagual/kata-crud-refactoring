import React, { useContext,useEffect } from 'react'
import { GET_API_TODO,GET_API_CATS } from '../config';
import { TYPES } from '../utils/operations';
import { toDoContext } from '../contexts/toDoContext';
import {ToDoForm} from './ToDoForm';
import {ListToDo} from './ListToDo';

export default function WrapToDos() {
    const { dispatch, state } = useContext(toDoContext);
    useEffect(() => {
        //changeState(false);
        //http://127.0.0.1:8080/api/categories/all 
        fetch(GET_API_CATS)
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: TYPES.GET_CATS, list })
          })
      }, [dispatch]);

    useEffect(() => {
        //changeState(false);
        //http://127.0.0.1:8080/api/categories/all 
        fetch(GET_API_TODO)
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: TYPES.GET_TODOS, list })
          })
      }, [dispatch]);  

      
      console.log(state.toDoS);
      console.log(state.categories);
    return (
      
    <>
    {state?.categories.map((categoria)=>{
       return <div key={categoria.id}>
           <span>{categoria.name}</span> 
           <button>Eliminar</button>
            <ToDoForm idCat={categoria.id} nomCat={categoria.name}/>
            <ListToDo idCat={categoria.id}/>
            
       </div>
        
        
    })}
    </>
  )
}
