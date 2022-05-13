package co.com.sofka.crud.entities;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="tbl_todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(nullable = false)  
    private String name;

    private boolean isCompleted;

    @ManyToOne  (fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_id_cat"),name="id_cat")
    private Category category;


}
