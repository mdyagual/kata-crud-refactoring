package co.com.sofka.crud.entities;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="tbl_categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    @Column(name="id_cat",unique = true, nullable = false)    
    private Long id;

    //@Min(10)
    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)    
    private List<Todo> todos;
    
    /*public Category(Todo todo){
        this.todo=todo;
        todo.setCategory(this);
    }*/

    

    public Category() {
    }



    //Getters and setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public void setTodo(Todo todo){
        todos.add(todo);
        todo.setCategory(this);

    }

    public void removeTodo(Todo todo){
        todos.remove(todo);
        todo.setCategory(null);

    }
    
}
