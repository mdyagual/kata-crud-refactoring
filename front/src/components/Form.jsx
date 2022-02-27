import React,{useContext,useRef,useState} from 'react';
//import {setHideComponent } from '../App';
import {POST_API,DELETE_API } from '../config';
import { toDoContext } from '../contexts/toDoContext';

//Dashboard
export const CategoryForm = ({changeState}) => {
    
    const formRef = useRef(null);
    const { dispatch, state: { category } } = useContext(toDoContext);
    
    const item = category.item;

    const [catStatus, modifyCat] = useState(item);

    const onAdd = (event) => {
      event.preventDefault();
      changeState(false);

      const request = {
        name: catStatus.name,
        id: null
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
          dispatch({ type: "add-cat", item: todo });
          modifyCat({ name: "" });
          formRef.current.reset();
        });
    }
    
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.name}
        onChange={(event) => {
          modifyCat({ ...catStatus, name: event.target.value })
        }}  ></input>
      
      {!item?.id && <button onClick={onAdd}>Nueva Lista</button>}
    </form>
}

//N-Categoria
export const ListCatForm = ({changeState}) => {
    
    const formRef = useRef(null);
    const { dispatch, state: { category } } = useContext(toDoContext);
    
    const currentList = category.list;
    const onDelete = (id) => {
      //http://127.0.0.1:8080/api/todos/eliminar/{id}
      fetch(DELETE_API + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-cat", id })
      })
    };
    
    //Por acomodar para que se vea más bonito 
    return <form ref={formRef}>
      {currentList.map((category)=>{
        return <div class="catDiv">
          {category.name.toUpperCase()} 
          <button onClick={onDelete}>Eliminar</button> </div>
      })}
    </form>
}
