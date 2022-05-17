import { TODO } from '../utils/actionsTodoTypes';

export const getTodosAction = (todos) => {
    return {
        type: TODO.GET_TODOS,
        payload: todos
    };
}