package co.com.sofka.crud.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;

@Entity
@Table(name="tbl_todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    @Column(unique = true, nullable = false)
    private Long id;
    
    @Min(10)
    @Column(nullable = false)  
    private String name;

    private boolean isCompleted;
    
    @ManyToOne
    @JoinColumn(name="id_cat")
    private Category groupListId;

    
    //Getters and setters
    public Category getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(Category groupListId) {
        this.groupListId = groupListId;
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

    public void setCompleted(boolean completed) {
        this.isCompleted = completed;
    }
}
