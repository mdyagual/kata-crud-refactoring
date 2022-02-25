import { createContext } from 'react';

import { initialState } from '../reducers';

export const toDoContext = createContext(initialState);