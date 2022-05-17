import { TYPES } from "../utils/operations";
export const toDoInitialState = {
  toDoS: [] /*{ list: [], item: {} }*/,
  categories: [] /*{list: [], item:{} }*/,
  updateItem: null 
};

export function toDoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_CAT:
      return { ...state, categories: [...state.categories, action.item] };

    case TYPES.ADD_TO_DO:
      return { ...state, toDoS: [...state.toDoS, action.item] };

    case TYPES.GET_CATS:
      return { ...state, categories: action.payload };

    case TYPES.GET_TODOS:
      return { ...state, toDoS: action.list };

    case TYPES.DELETE_CAT:
      const categoryDel = state.categories;
      const catList = categoryDel.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, categories: catList };
    
    case TYPES.DELETE_TO_DO:
      const toDoDel = state.toDoS;
      const toDoList = toDoDel.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, toDoS: toDoList };

    case TYPES.UPDATE_TO_DO:
      const toDoUp = state.toDoS;
      const toDoUpList = toDoUp.map((item) => {
        if(item.id === action.item.id){
          return action.item;
        }
        return item;
      });
      return { ...state, toDoS: toDoUpList };

     case TYPES.UPDATE_ITEM :
       return {...state, updateItem: action.item}

    case TYPES.CLEAN_ITEM:
        return {...state, updateItem: null}

    default:
      return state;
  }
}
