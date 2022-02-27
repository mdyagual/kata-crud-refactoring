import React,{useState } from 'react';
import { CategoryForm, ListCatForm, ToDoForm } from './components/CategoryForm'; //Form2.jsx

import { StoreProvider } from './components/StoreProvider';
import ToDoPage from './pages/ToDoPage';
//Corregir que se muestre si tiene para enseñar {!hideComponent ?: "Nada que mostrar"} {!hideComponent ? <List/>: null}        
//{!hideComponent ? <ToDoForm />  : null }
export default function App() {
  const [hideComponent,setHideComponent] = useState(true);  
  return (
    <StoreProvider>
      <h3 ><div id="dashboardTitle">Dashboard</div></h3>
      <ToDoPage/>
      {/*<CategoryForm changeState={setHideComponent}/>*/}
      {/*!hideComponent ? <ListCatForm changeState={setHideComponent}/>: "No hay nada que mostrar"*/}
      
      
    </StoreProvider>)
}


