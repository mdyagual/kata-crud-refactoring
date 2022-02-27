import React from 'react';
import { Form } from './components/Form'; //Form2.jsx
import { List } from './components/List';
import { StoreProvider } from './components/StoreProvider';
//<div id="catForm">        
       
 //      </div>
export default function App() {
  return (
    <StoreProvider>
      <h3 ><div id="dashboardTitle">Dashboard</div></h3>
      <Form />
      <List/>
      
        
      
      

      
    </StoreProvider>)
}


