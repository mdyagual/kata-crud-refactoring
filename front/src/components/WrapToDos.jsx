import React, { useContext,useEffect } from 'react'
import { GET_API_TODO,GET_API_CATS, DELETE_API_CAT, DELETE_API_TODO } from '../config';
import { TYPES } from '../utils/operations';
import { toDoContext } from '../contexts/toDoContext';
import {ToDoForm} from './ToDoForm';
import {ListToDo} from './ListToDo';

export default function WrapToDos() {
    const { dispatch, state } = useContext(toDoContext);
    const todos=state.toDoS;

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
        //http://127.0.0.1:8080/api/todos/all 
        fetch(GET_API_TODO)
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: TYPES.GET_TODOS, list })
          })
      }, [dispatch]);  

      const onDelete = (id) => {
        //http://127.0.0.1:8080/api/todos/eliminar/{id}
        if(todos.length>0){
            todos.map((todo)=>{
                if(todo.category.id === id){
                    fetch(DELETE_API_TODO + id,{
                        method: "DELETE"
                      }).then(() => {
                        dispatch({ type: TYPES.DELETE_TO_DO, id })
                      })
                }
            });       
            
        }
        //http://127.0.0.1:8080/api/categories/eliminar/{id}
         fetch(DELETE_API_CAT + id, {
           method: "DELETE"
         }).then(() => {
           dispatch({ type: TYPES.DELETE_CAT, id })
         })
       };  
    
    


    return (     
    <>
    {state?.categories.map((categoria)=>{
       return <div className='catDiv' key={categoria.id}>
           <div ><span>{categoria.name.toUpperCase()}</span> <button onClick={()=>onDelete(categoria.id)}>Eliminar</button>
           </div>
            <ToDoForm idCat={categoria.id} nomCat={categoria.name}/>
            <ListToDo idCat={categoria.id} nomCat={categoria.name}/>
            
       </div>
        
        
    })}
    </>
  )
}
