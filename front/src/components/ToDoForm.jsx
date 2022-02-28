import React,{useRef,useState,useContext, useEffect} from 'react';
import { TYPES } from '../utils/operations';
import { toDoContext } from '../contexts/toDoContext';
import { POST_API_TODO,PUT_API_TODO } from '../config';
//ToDo's
export const ToDoForm = ({idCat,nomCat}) =>{
    const formRef = useRef(null);
    const {dispatch,state} = useContext(toDoContext);
    const item = state?.updateItem;
    
    const [toDoState, setToDoState] = useState('');
    

  
    useEffect(() => {
     if(item!==null){
      setToDoState(item?.name)
     }  
        },[item])

    const onAdd = (event) =>{
      event.preventDefault();
  
      const request ={
        name: toDoState,
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
          setToDoState("" );
          formRef.current.reset();
        });
    }

    const onEdit = (event) => {   
        event.preventDefault();
      const request ={
        name: toDoState,
        id: item.id,
        completed: item.completed,
        category: {
          id: item.category.id,
          name: item.category.name
        }
      };
      console.log(request);
      fetch(PUT_API_TODO, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
      .then((item) => {
        dispatch({type: TYPES.CLEAN_ITEM})
        dispatch({type: TYPES.UPDATE_TO_DO,item})
        setToDoState('')
      })
      
      
    };
    
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"        
        value={toDoState}
        onChange={(event) => {
          setToDoState(event.target.value)
        }}  ></input>
       {!item && <button onClick={onAdd}>Crear</button>}
       {item && <button onClick={onEdit}>Actualizar</button>}
    </form>  
    
    
  
  }