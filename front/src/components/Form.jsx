import React,{useContext,useRef,useState} from 'react';
import {POST_API,PUT_API } from '../config';
import { toDoContext } from '../contexts/toDoContext';

export const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { item } } = useContext(toDoContext);
    //const item = todo.item;
    const [formStatus, modifyState] = useState({item});
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: formStatus.name,
        id: null,
        completed: false
      };
  
  
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
  
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item?.name}
        onChange={(event) => {
          modifyState({ ...formStatus, name: event.target.value })
        }}  ></input>
      {item?.id && <button onClick={onEdit}>Actualizar</button>}
      {!item?.id && <button onClick={onAdd}>Crear</button>}
    </form>
  }