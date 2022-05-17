import * as actCategory from '../actions/actionsCategory';
import { GET_API_CATS } from '../config';
function getAllCategories(dispatch){   
       fetch(GET_API_CATS)
                .then((response) => {
                                response.json().then((data) => {
                                console.log(data);
                                dispatch(actCategory.getAllCategoriesAction(data));
                                
                            })
                            .catch((err)=> console.log(err))});
    
    
};

export default {
    getAllCategories
};