export const ListCatForm = ({changeState}) => {
    
    //const formRef = useRef(null);
    const { dispatch, state: { categories } } = useContext(toDoContext);
    const [hideTodo,setHideTodo] = useState(true); 
    const currentList = categories;
    //const item = category.item;
    /*useEffect(() => {
      changeState(false);
      //http://127.0.0.1:8080/api/categories/all 
      fetch(GET_API_CAT)
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: TYPES.GET_CATS, list })
        })
    }, [dispatch]);*/

    const onDelete = (id) => {
      //http://127.0.0.1:8080/api/categories/eliminar/{id}
      fetch(DELETE_API_CAT + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: TYPES.DELETE_CAT, id })
      })
    };
    
    /*<ToDoForm idCat={category.id} nomCat={category.name} /> 
         <br></br>   
          {!item.id && <button onClick={onDelete}>Eliminar</button>}      */  
    return <div>       
      {currentList.map((category)=>{
        return <div className="catDiv" key={category.name}>
          {category.name.toUpperCase()} 
          {<ToDoForm idCat={category.id} nomCat={category.name} />} 
          { <List idCat={category.id}/>}         
        </div>         
        })
      } 
          
    </div>
    
    
}

