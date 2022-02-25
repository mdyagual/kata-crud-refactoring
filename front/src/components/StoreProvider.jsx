import React, {useReducer} from 'react';
import { toDoContext } from '../contexts/toDoContext';
import {toDoInitialState, toDoReducer } from '../reducers/toDoReducer';


export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toDoReducer, toDoInitialState);
  
    return <toDoContext.Provider value={{ state, dispatch }}>
      {children}
    </toDoContext.Provider>
  
  }
  
 