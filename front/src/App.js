import React from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { StoreProvider } from './components/StoreProvider';

export default function App() {
  return (
    <StoreProvider>
      <h3 ><div id="dashboardTitle">Dashboard</div></h3>
      <Form />
      <div id="catForm">        
        <List/>
      </div>
      
        
      
      

      
    </StoreProvider>)
}


