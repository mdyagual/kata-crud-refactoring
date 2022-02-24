package co.com.sofka.crud.repositories;


import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;


import co.com.sofka.crud.entities.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    public abstract ArrayList<Todo> findAll();
}
