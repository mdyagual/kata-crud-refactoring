package co.com.sofka.crud.dto;

import co.com.sofka.crud.entities.Category;

public class TodoDTO {
    private Long id;    
    private String name;
    private boolean isCompleted;
    private Category category;
    
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category c) {
        this.category = c;
    }
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
    public boolean isCompleted() {
        return isCompleted;
    }
    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

  
   

    
}
