import { TYPES } from "../utils/operations";
export const toDoInitialState = {
    todo: {  list: [], item: {} },
    category: {list: [], item:{} }
};

export function toDoReducer(state, action) {
    switch (action.type) {
      //CategoryForm
      case TYPES.ADD_CAT:
        const categoryAdd = state.category.list;
        categoryAdd.push(action.item);
        return{...state, category: {list: categoryAdd, item:{} }}

      case TYPES.DELETE_CAT:
        const categoryDel = state.category;
        const catList = categoryDel.list.filter((item) => {
                return item.id !== action.id;
            });
        categoryDel.list = catList;
        return { ...state, category: categoryDel }

      case TYPES.GET_CATS:
        const catAllList = state.category;
        catAllList.list = action.list;
        return { ...state, category: catAllList }

      case TYPES.GET_TODOS:
        const todoUpList = state.todo;
        todoUpList.list = action.list;
        return { ...state, todo: todoUpList }
        
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