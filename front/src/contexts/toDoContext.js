import { createContext } from 'react';
import { toDoInitialState } from '../reducers/toDoReducer';



export const toDoContext = createContext(toDoInitialState);