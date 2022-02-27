import React,{useRef,useState,useContext} from 'react';
import { TYPES } from '../utils/operations';
import { toDoContext } from '../contexts/toDoContext';
import { POST_API_TODO } from '../config';
//ToDo's
export const ToDoForm = ({idCat,nomCat}) =>{
    const formRef = useRef(null);
    const { dispatch} = useContext(toDoContext);
    //const item = todo.item;
    
    const [toDoState, setToDoState] = useState('');
  
    const onAdd = (event) =>{
      event.preventDefault();
  
      const request ={
        name: toDoState.name,
        id: null,
        isCompleted:false,
        category: {
          id: idCat,
          name: nomCat
        }
      };
  
      fetch(POST_API_TODO, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: TYPES.ADD_TO_DO, item: todo });
          setToDoState({ name: "" });
          formRef.current.reset();
        });
  
  
  
    }
    
  
  
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        //defaultValue={item.name}
        onChange={(event) => {
          setToDoState({ ...toDoState, name: event.target.value })
        }}  ></input>
        
       <button onClick={onAdd}>Crear</button>
    </form>  
    
    
  
  }