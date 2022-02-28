import { DELETE_API_CAT } from "../config";
export const ListCatForm = ({changeState}) => {
    
    //const formRef = useRef(null);
    const { dispatch, state: { categories } } = useContext(toDoContext);
    const [hideTodo,setHideTodo] = useState(true); 
    const currentList = categories;
    
    
    
    
    /*<ToDoForm idCat={category.id} nomCat={category.name} /> 
         <br></br>   
          {!item.id &&     */  
    return <div>       
      {currentList.map((category)=>{
        return <div className="catDiv" key={category.name}>          
           <button onClick={()=>onDelete(category.id)}>Eliminar</button>
          {<ToDoForm idCat={category.id} nomCat={category.name} />} 
          {<ListToDo idCat={category.id}/>}         
        </div>         
        })
      } 
          
    </div>
    
    
}

