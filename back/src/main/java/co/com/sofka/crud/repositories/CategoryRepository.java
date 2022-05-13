package co.com.sofka.crud.repositories;

import org.springframework.data.repository.CrudRepository;

import co.com.sofka.crud.entities.Category;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{
    public abstract ArrayList<Category> findAll();
}
