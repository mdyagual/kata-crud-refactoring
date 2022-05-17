import { CATEGORY } from '../utils/actionsCategoryTypes';

export const getAllCategoriesAction = (categorias) => {
    return {
        type: CATEGORY.GET_CATS,
        payload: categorias
    };
}