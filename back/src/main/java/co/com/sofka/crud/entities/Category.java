package co.com.sofka.crud.entities;

import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.Min;

@Entity
@Table(name="tbl_categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    @Column(name="id_cat",unique = true, nullable = false)
    @OneToOne(mappedBy = "groupListId",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Long id;

    @Min(10)
    @Column(nullable = false)
    private String name;


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
    
    
    
}
