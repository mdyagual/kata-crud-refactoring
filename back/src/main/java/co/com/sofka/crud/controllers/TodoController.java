package co.com.sofka.crud.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ArrayList<TodoDTO>> obtenerTodos(){
        ArrayList<TodoDTO> allToDos = toDoService.getToDos();
        return new ResponseEntity<ArrayList<TodoDTO>>(allToDos, HttpStatus.OK);
    }

    @GetMapping("/todo/{id}")
    //http://127.0.0.1:8080/api/todos/todo/{id}
    public ResponseEntity<TodoDTO> obtenerTodoPorId(@RequestParam("id") Long id){
        TodoDTO todoDTO = toDoService.getToDoById(id);
        return new ResponseEntity<TodoDTO>(todoDTO,HttpStatus.OK);
    }
    
    //POST
    @PostMapping("/guardar")
    //http://127.0.0.1:8080/api/todos/guardar
    public ResponseEntity<Todo> guardarTodo(@RequestBody TodoDTO todoDTO){
        Todo todo = toDoService.saveToDO(todoDTO);
        return new ResponseEntity<Todo>(todo, HttpStatus.CREATED);
    }

    //PUT
    @PutMapping("/actualizar")
    //http://127.0.0.1:8080/api/todos/actualizar
    public ResponseEntity<Todo> actualizarToDo(@RequestBody TodoDTO todoDTO){
        if(todoDTO.getId() != null){
            Todo todoUp = toDoService.saveToDO(todoDTO);
            return new ResponseEntity<Todo>(todoUp,HttpStatus.CREATED);
        }
        
        throw new RuntimeException("No existe el id para actualziar");
    }

    //DELETE
    @DeleteMapping(path= "/eliminar/{id}")
    //http://127.0.0.1:8080/api/todos/eliminar/{id}
    public ResponseEntity eliminarToDo(@PathVariable("id") Long id){
        toDoService.deleteToDo(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    

}
