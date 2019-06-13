package com.practicals.springboottodoapp;

import org.springframework.data.annotation.Id;

public class Todo {

    @Id
    private String id;

    private Boolean status;

    private String task;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {

        this.task = task;

    }

    public Todo() {}

    public Todo(String task) {
        this.task = task;
        this.status = false;
    }

    public Todo(String task, Boolean status) {
        this.task = task;
        this.status = status;
    }

}
