package co.com.sofka.crud.controllers;

import java.util.ArrayList;

import co.com.sofka.crud.dto.CategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.sofka.crud.services.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService catService;   

    @GetMapping("/all")
    //http://127.0.0.1:8080/api/categories/all
    public ResponseEntity<ArrayList<CategoryDTO>> obtenerCategories(){
        ArrayList<CategoryDTO> allCats = catService.getCategories();
        return new ResponseEntity<ArrayList<CategoryDTO>>(allCats, HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    //http://127.0.0.1:8080/api/categories/category/{id}
    public ResponseEntity<CategoryDTO> obtenerCategoryPorId(@PathVariable("id") Long id){
        CategoryDTO c = catService.getCategoryById(id);
        return new ResponseEntity<CategoryDTO>(c,HttpStatus.OK);
    }

    //POST
    @PostMapping("/guardar")
    //http://127.0.0.1:8080/api/categories/guardar
    public ResponseEntity<CategoryDTO> guardarTodo(@RequestBody CategoryDTO c){
        CategoryDTO cat = catService.saveCategory(c);
        return new ResponseEntity<CategoryDTO>(cat, HttpStatus.CREATED);
    }

    //DELETE
    @DeleteMapping(path= "/eliminar/{id}")
    //http://127.0.0.1:8080/api/categories/eliminar/{id}
    public ResponseEntity eliminarToDo(@PathVariable("id") Long id){
        catService.deleteCategory(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
