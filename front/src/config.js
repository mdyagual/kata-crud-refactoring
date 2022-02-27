//Para el componente form()
export const HOST_API = "http://localhost:8080";
export const TODO_API ="/api/todos";
export const CAT_API="/api/categories";

//Operaciones CRUD - endpoints - Todo
export const GET_API_TODO = HOST_API + TODO_API+ "/all";
export const POST_API_TODO = HOST_API + TODO_API+ "/guardar";
export const PUT_API_TODO = HOST_API +  TODO_API+"/actualizar";
export const DELETE_API_TODO = HOST_API +  TODO_API+"/eliminar/";

//Operaciones CRUD - endpoints -Categories
export const GET_API_CAT = HOST_API + CAT_API+ "/all";
export const POST_API_CAT = HOST_API + CAT_API+ "/guardar";
export const DELETE_API_CAT = HOST_API +  CAT_API+"/eliminar/";

