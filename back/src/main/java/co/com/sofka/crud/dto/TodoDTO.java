package co.com.sofka.crud.dto;

public class TodoDTO {
    private Long id;    
    private String name;
    private boolean isCompleted;
    private String groupListId;
    
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
    public String getGroupListId() {
        return groupListId;
    }
    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }

    
}
