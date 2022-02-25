import React from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { StoreProvider } from './components/StoreProvider';

export default function App() {
  return (
    <StoreProvider>
      <h3>To-Do List</h3>
      <Form />
      <List />
    </StoreProvider>)
}


