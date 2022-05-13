import React,{useContext,useEffect } from 'react';
import { DELETE_API_TODO, PUT_API_TODO,GET_API_TODO} from '../config';
import { toDoContext } from '../contexts/toDoContext';
import { toDoReducer } from '../reducers/toDoReducer';

import { TYPES } from '../utils/operations';

export const ListToDo = ({idCat,nomcat}) => {
    const { dispatch, state } = useContext(toDoContext);
    const todos=state.toDoS;
    console.log("Listado de todos: ",todos)




  const onDelete = (id) => {
      //http://127.0.0.1:8080/api/todos/eliminar/{id}
      fetch(DELETE_API_TODO + id, {
        method: "DELETE"
      }).then(() => {
        dispatch({ type: TYPES.DELETE_TO_DO, id })
      })
    };
    
    const onEdit = (todo) => {           
      dispatch({ type: TYPES.UPDATE_ITEM, item: todo })
      
    };
    
  
    const onChange = (event, todo) => {
      console.log(event);
      const request ={
        name: todo.name,
        id: todo.id,
        completed: event.target.checked,
        categoryId: todo.categoryId
      };     
      
      fetch(PUT_API_TODO, {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          console.log("CHBX: ", todo);
          dispatch({ type: TYPES.UPDATE_TO_DO, item: todo });
          
        });
    };
  
    const decorationDone = {
      textDecoration: 'line-through'
    };
    return <div>
      
      <table>      
        <thead>          
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
          </tr>
        </thead>
        <tbody>
          <tr><td>{todos?.length===0? "No hay TO-DOs":null}</td></tr>
          { todos?.filter((todo)=>todo?.categoryId === idCat)?.map((todo) => {            
            return <tr key={todo?.id} style={todo?.completed ? decorationDone : {}}>              
              <td>{todo?.id}</td>
              <td>{todo?.name}</td>
              <td><center><input type="checkbox" defaultChecked={todo?.completed} onChange={(event) => onChange(event, todo)}></input></center></td>
              <td><button onClick={() => onDelete(todo?.id)}>Eliminar</button></td>
              <td><button disabled={todo.completed} onClick={() => onEdit(todo)}>Editar</button></td>
              
            </tr>
          })}
          
        </tbody>
        
      </table>
      
    </div>
    
  }
