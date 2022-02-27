import { TYPES } from "../utils/operations";
export const toDoInitialState = {
    toDoS: []/*{ list: [], item: {} }*/,
    categories: [] /*{list: [], item:{} }*/
};

export function toDoReducer(state, action) {
    switch (action.type) {
      //Todo lo que está action es lo que yo mando
      //CategoryForm
      //POST_CAT
      case TYPES.ADD_CAT: 
        //... (se crea una copia del state): Se necesita cosas inmutables      
        return{...state, categories: [...state.categories,action.item]}
      //DELETE_CAT
      case TYPES.DELETE_CAT:
        const categoryDel = state.categories;
        //Hace un nuevo arreglo con el que ya no está
        //Todos los métodos del ES6 son inmutables
        const catList = categoryDel.list.filter((item) => {
                return item.id !== action.id;
            });
        return { ...state, categories: catList }

      case TYPES.GET_CATS:
        //const catAllList = state.categories;      
        //console.log("CatAllList: ",action.list);
        return { ...state, categories: action.list }

      case TYPES.GET_TODOS:
        //TODO: Determinar la categoría, mapearla.
        /*const todoUpList = state.todo;  
        todoUpList.list = action.list;   
        const newList = Object.keys(todoUpList).map((idCat)=>{
          if(idCat === action.idCat){
            return action.list;
          }
          return todoUpList[idCat];
        });
        //console.log("NewList: ",newList);
        todoUpList.list=newList;        */
        return { ...state, toDoS: action.list}
        
      case TYPES.ADD_TO_DO:
        /*const todoUp = state.todo.list;
        todoUp.push(action.item);
        return { ...state, todo: {list: todoUp.filter((item) => {
          return (action.id!==item.id  );
        }), item: {}} }*/
        return{...state, toDoS: [...state.toDoS,action.item]}

      /*case 'update-item':
        const todoUpItem = state.todo;
        const listUpdateEdit = todoUpItem.list.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        });
        todoUpItem.list = listUpdateEdit;
        todoUpItem.item = {};
        return { ...state, todo: todoUpItem }

      case 'delete-item':
        const todoUpDelete = state.todo;
        const listUpdate = todoUpDelete.list.filter((item) => {
          return item.id !== action.id;
        });
        todoUpDelete.list = listUpdate;
        return { ...state, todo: todoUpDelete }

      case 'update-list':
        const todoUpList = state.todo;
        todoUpList.list = action.list;
        return { ...state, todo: todoUpList }

      case 'edit-item':
        const todoUpEdit = state.todo;
        todoUpEdit.item = action.item;
        return { ...state, todo: todoUpEdit }

      case 'add-item':
        const todoUp = state.todo.list;
        todoUp.push(action.item);
        return { ...state, todo: {list: todoUp, item: {}} }
      
      case 'add-list':
        const todoUpAdd = state.todo;
        todoUpAdd.catName = action.catName;        
        return { ...state, todo: todoUpAdd }*/

      default:
        return state;
    }
  }