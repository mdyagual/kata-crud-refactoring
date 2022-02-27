package co.com.sofka.crud.repositories;

import org.springframework.data.repository.CrudRepository;

import co.com.sofka.crud.entities.Category;

public interface CategoryRepository extends CrudRepository<Category, Long>{
    
}
