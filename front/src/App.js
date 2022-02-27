import React,{useState } from 'react';
import { CategoryForm, ListCatForm } from './components/Form'; //Form2.jsx
import { List } from './components/List';
import { StoreProvider } from './components/StoreProvider';
//<div id="catForm">        
     
 //      </div>
export default function App() {
  const [hideComponent,setHideComponent] = useState(true);  
  return (
    <StoreProvider>
      <h3 ><div id="dashboardTitle">Dashboard</div></h3>
      <CategoryForm changeState={setHideComponent}/>
      {!hideComponent ? <ListCatForm/>: "Nada por hacer"}
      {!hideComponent ? <List />: null}
    </StoreProvider>)
}


