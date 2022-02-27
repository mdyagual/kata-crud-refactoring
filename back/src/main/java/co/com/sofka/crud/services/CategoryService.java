package co.com.sofka.crud.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.crud.entities.Category;
import co.com.sofka.crud.repositories.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository catRepo;

    public ArrayList <Category> getCategories(){
        return (ArrayList<Category>) catRepo.findAll();
    }
    public Category getCategoryById(Long id){
        return catRepo.findById(id).get();
       
    }

    public void deleteCategory(Long id){
        catRepo.delete(getCategoryById(id));
    }    

    public Category saveCategory(Category c){
        return catRepo.save(c);
    }
}
