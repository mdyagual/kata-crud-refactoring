import React,{useContext,useEffect,useRef,useState} from 'react';
import { DELETE_API, GET_API, PUT_API } from '../config';
import { toDoContext } from '../contexts/toDoContext';


export const List = () => {
    const { dispatch, state: { todo } } = useContext(toDoContext);
    const { state: { item } } = useContext(toDoContext);
    
    const formRef = useRef(null);
    const currentList = todo.list;
    
    const [formStatus, modifyState] = useState({item});
    /*useEffect(() => {
      //http://127.0.0.1:8080/api/todos/all 
      fetch(GET_API)
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);*/
  
  
    const onDelete = (id) => {
      //http://127.0.0.1:8080/api/todos/eliminar/{id}
      fetch(DELETE_API + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
  
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
  
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
      };
      //Checkbox?
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
        });
    };
  
    const decorationDone = {
      textDecoration: 'line-through'
    };
    return <form  ref={formRef}>
      <h3>{todo.catName}</h3>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer?"
        defaultValue={item?.form}
        onChange={(event) => {
          modifyState({ ...formStatus, name: event.target.value })
        }}  ></input>      
      {!item?.id && <button >Crear</button>}
    
      <table >
        <thead>
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
              <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
              <td><button onClick={() => onEdit(todo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </form>
  }