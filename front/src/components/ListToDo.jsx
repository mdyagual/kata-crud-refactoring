import React,{useContext, useState,useEffect } from 'react';
import { DELETE_API_TODO, GET_API_TODO, PUT_API_TODO,GET_API_CAT} from '../config';
import { toDoContext } from '../contexts/toDoContext';
import { ToDoForm } from './CategoryForm';
import { TYPES } from '../utils/operations';

export const ListToDo = ({idCat}) => {
    const { dispatch, state } = useContext(toDoContext);
    const todos=state.toDoS;
    //const categories=state.categories;
    //Operador ternario: Si existe que devuelve, sino devuelve vacío 
    //const currentList = todo.list[idCat]?todo.list[idCat]:[]; //Mapa~ !Puede que no exista: Necesita vali
    //console.log(todo.list);
    /*useEffect(() => {
      //changeState(false);
      //http://127.0.0.1:8080/api/todos/all/id: Cambiar a filtro por id 
      fetch(GET_API_TODO)
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: TYPES.GET_TODOS, list})
          //console.log(list);
        })
    }, [dispatch]);*/
  
  const onDelete = (id) => {
      //http://127.0.0.1:8080/api/todos/eliminar/{id}
      fetch(DELETE_API_TODO + id, {
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
      fetch(PUT_API_TODO, {
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
          { todos.filter((todo)=>todo.category.id === idCat).        
            map((todo) => {            
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
      
    </div>
    
  }
