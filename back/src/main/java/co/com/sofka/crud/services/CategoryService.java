package co.com.sofka.crud.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import co.com.sofka.crud.dto.CategoryDTO;
import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.crud.entities.Category;
import co.com.sofka.crud.repositories.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository catRepo;

    @Autowired
    private ModelMapper modelMapper;

    public ArrayList <CategoryDTO> getCategories(){

        return (ArrayList<CategoryDTO>) catRepo.findAll().stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }
    public CategoryDTO getCategoryById(Long id){  return convertEntityToDto(catRepo.findById(id).get());  }


    public void deleteCategory(Long id){
        catRepo.delete(convertDTOToEntity(getCategoryById(id)));
    }
    public CategoryDTO saveCategory(CategoryDTO c){
        return convertEntityToDto(catRepo.save(convertDTOToEntity(c)));
    }


    //Converters
    public CategoryDTO convertEntityToDto(Category category){
        CategoryDTO categoryDTO = modelMapper.map(category,CategoryDTO.class);
        List<TodoDTO> todosDTO= category.getTodos().stream().map(c -> modelMapper.map(c,TodoDTO.class)).collect(Collectors.toList());
        categoryDTO.setTodos(todosDTO);
        return categoryDTO;

    }

    public Category convertDTOToEntity(CategoryDTO categoryDTO){
        return modelMapper.map(categoryDTO, Category.class);
    }
}
