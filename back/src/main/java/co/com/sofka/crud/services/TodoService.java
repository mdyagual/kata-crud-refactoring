package co.com.sofka.crud.services;

import java.util.ArrayList;
import java.util.stream.Collectors;

import co.com.sofka.crud.dto.CategoryDTO;
import co.com.sofka.crud.entities.Category;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.repositories.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository toDoRepo;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ModelMapper modelMapper;

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
    public TodoDTO saveToDO(TodoDTO todoDTO){
        CategoryDTO categoryDTO = categoryService.getCategoryById(todoDTO.getCategoryId());
        Category c = modelMapper.map(categoryDTO,Category.class);
        c.addTodo(convertDTOToEntity(todoDTO));
        return convertEntityToDto(toDoRepo.save(convertDTOToEntity(todoDTO)));
    }

    //Delete
    public void deleteToDo(Long id){

        toDoRepo.delete(convertDTOToEntity(getToDoById(id)));
    }    

    //Conversiones
    public TodoDTO convertEntityToDto(Todo todo){
        return modelMapper.map(todo,TodoDTO.class);
    }

    public Todo convertDTOToEntity(TodoDTO todoDTO){
        return modelMapper.map(todoDTO, Todo.class );
    }


}
