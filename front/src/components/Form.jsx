import React,{useContext,useRef,useState} from 'react';
import {POST_API,PUT_API } from '../config';
import { toDoContext } from '../contexts/toDoContext';
import { List } from './List';

export const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { item } } = useContext(toDoContext);
    //const item = todo.item;
    const [formStatus, modifyState] = useState({item});

    //El add donde se debería meter la sublista
    const onAdd = (event) => {
      event.preventDefault();
      
      const request = {
        nomCat: formStatus.nomCat,
        
      }
      /*const request = {
        name: formStatus.name,
        id: null,
        completed: false
      };*/
  
  
      fetch(POST_API, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "add-item", item: todo });
          modifyState({ name: "" });
          formRef.current.reset();
        });
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: item.name,
        id: item.id,
        isCompleted: item.isCompleted
      };
  
  
      fetch(PUT_API, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
          modifyState({ name: "" });
          formRef.current.reset();
        });
    }
    //{item?.id && <button onClick={onEdit}>Actualizar</button>}
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="Lista TO-DO"
        defaultValue={item?.name}
        onChange={(event) => {
          modifyState({ ...formStatus, name: event.target.value })
        }}  ></input>
      
      {!item?.nomCat && <button onClick={onAdd}>Nueva lista</button>}
    </form>
  }