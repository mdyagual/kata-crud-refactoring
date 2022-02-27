import React,{useContext,useRef,useState} from 'react';
//import {setHideComponent } from '../App';
import {POST_API,DELETE_API } from '../config';
import { toDoContext } from '../contexts/toDoContext';
import { TYPES } from '../utils/operations';

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
          dispatch({ type: TYPES.ADD_CAT, item: todo });
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
export const ListCatForm = () => {
    
    const formRef = useRef(null);
    const { dispatch, state: { category } } = useContext(toDoContext);
    
    const currentList = category.list;
    const onDelete = (id) => {
      //http://127.0.0.1:8080/api/todos/eliminar/{id}
      fetch(DELETE_API + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: TYPES.DELETE_CAT, id })
      })
    };
    
    //Por acomodar para que se vea más bonito 
    return <form ref={formRef} >
      {currentList.map((category)=>{
        return <div className="catDiv" key={category.name}>
          {category.name.toUpperCase()} 
          <button onClick={onDelete}>Eliminar</button> </div>
      })}
    </form>
}

//ToDo's
export const ToDoForm = ({id}) =>{
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(toDoContext);
  const item = todo.item;
  const [toDoState, setToDo] = useState(item);

  const onAdd = (event) =>{
    event.preventDefault();

    const request ={
      name: state.name,
      id: null,
      isCompleted:false,
      groupListId: id
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
        dispatch({ type: TYPES.ADD_TO_DO, item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });



  }
  const onEdit = () =>{

  }


  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setToDo({ ...toDoState, name: event.target.value })
      }}  ></input>
    {item.id && <button  onClick={onEdit}>Actualizar</button>}
    {!item.id && <button onClick={onAdd}>Crear</button>}
  </form>  
  

}