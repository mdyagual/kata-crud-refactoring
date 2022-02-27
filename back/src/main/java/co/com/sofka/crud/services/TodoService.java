package co.com.sofka.crud.services;

import java.util.ArrayList;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.repositories.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository toDoRepo;

    //Gets
    public ArrayList<TodoDTO> getToDos(){
        return (ArrayList<TodoDTO>) toDoRepo.findAll()
                .stream()                    
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }
    public TodoDTO getToDoById(Long id){
        Todo todo = toDoRepo.findById(id).get();
        return convertEntityToDto(todo);
    }
    
    //Save
    public Todo saveToDO(TodoDTO todoDTO){
        return toDoRepo.save(convertDTOToEntity(todoDTO));
    }

    //Delete
    public void deleteToDo(Long id){
        toDoRepo.delete(convertDTOToEntity(getToDoById(id)));
    }    

    //Conversiones
    public TodoDTO convertEntityToDto(Todo todo){
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setId(todo.getId());
        todoDTO.setName(todo.getName());
        todoDTO.setCompleted(todo.isCompleted());
        todoDTO.setCategory(todo.getCategory());

        return todoDTO;
    }

    public static Todo convertDTOToEntity(TodoDTO todoDTO){
        Todo todo= new Todo();
        todo.setId(todoDTO.getId());
        todo.setName(todoDTO.getName());
        todo.setCompleted(todoDTO.isCompleted());
        todo.setCategory(todoDTO.getCategory());

        return todo;
    }


}
