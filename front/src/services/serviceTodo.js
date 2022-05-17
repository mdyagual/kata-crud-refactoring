import * as actTodo from '../actions/actionsTodo';
import { GET_API_TODO } from '../config';

function getTodos(dispatch){
    fetch(GET_API_TODO)
          .then((response) =>{
            response.json()
            .then((data) => dispatch(actTodo.getTodosAction(data)))
          .catch((err)=> console.log(err))});
}

export default {
    getTodos
};