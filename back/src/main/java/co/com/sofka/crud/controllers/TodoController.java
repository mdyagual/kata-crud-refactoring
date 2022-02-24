package co.com.sofka.crud.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.services.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService toDoService;

    //GET
    @GetMapping("/all")
    //http://127.0.0.1:8080/api/todos/all  
    public Iterable<TodoDTO> obtenerTodos(){
        return toDoService.getToDos();
    }

    @GetMapping("/todo/{id}")
    //http://127.0.0.1:8080/api/todos/todo/{id}
    public Todo obtenerTodoPorId(@RequestParam("id") Long id){
        return toDoService.getToDo(id);
    }
    
    //POST
    @PostMapping("/guardar")
    //http://127.0.0.1:8080/api/todos/guardar
    public Todo guardarTodo(@RequestBody TodoDTO todoDTO){
        return toDoService.saveToDO(todoDTO);
    }

    //PUT
    @PutMapping("/actualizar")
    //http://127.0.0.1:8080/api/todos/actualizar
    public Todo update(@RequestBody TodoDTO todoDTO){
        if(todoDTO.getId() != null){
            return toDoService.saveToDO(todoDTO);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    //DELETE
    @DeleteMapping(path= "/eliminar/{id}")
    //http://127.0.0.1:8080/api/todos/eliminar/{id}
    public void eliminarToDo(@PathVariable("id") Long id){
        toDoService.deleteToDo(id);
    }

    

}
