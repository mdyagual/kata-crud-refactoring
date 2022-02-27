import React,{useContext,useRef,useState,useEffect} from 'react';
//import {setHideComponent } from '../App';
import {POST_API_CAT,DELETE_API_CAT,POST_API_TODO, GET_API_CAT } from '../config';
import { toDoContext } from '../contexts/toDoContext';
import { List } from './List';
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
          
          modifyCat({ name: "" });
          
          formRef.current.reset();
        });
      
    }
    
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="TO-DO"
        defaultValue={item.name}
        onChange={(event) => {
          modifyCat({ ...catStatus, name: event.target.value })
        }}  ></input>
      
      {!item?.id && <button onClick={onAdd}>Nueva Lista</button>}
    </form>
}

//N-Categoria: El que tiene lo que se anida
export const ListCatForm = ({changeState}) => {
    
    const formRef = useRef(null);
    const { dispatch, state: { category } } = useContext(toDoContext);
    
    const currentList = category.list;
    /*useEffect(() => {
      //changeState(false);
      //http://127.0.0.1:8080/api/categories/all 
      fetch(GET_API_CAT)
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: TYPES.GET_CATS, list })
        })
    }, [dispatch]);*/



    const onDelete = (id) => {
      //http://127.0.0.1:8080/api/categories/eliminar/{id}
      fetch(DELETE_API_CAT + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: TYPES.DELETE_CAT, id })
      })
    };
    
    //Por acomodar para que se vea más bonito 
    
    return <div>       
      {currentList.map((category)=>{
        return <div className="catDiv" key={category.name}>
          {category.name.toUpperCase() }  
                   
          <button onClick={onDelete}>Eliminar</button> 
          <ToDoForm/> 
          <List/></div>        
          
      })}     
    </div>
    
    
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
      name: toDoState.name,
      id: null,
      isCompleted:false,
      groupListId: id
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
        setToDo({ name: "" });
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