package com.practicals.springboottodoapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class TodoController {
    @Autowired
    private TodoRepository repository;

    @GetMapping(value = "/todos", produces = "application/json")
    public List<Todo> getTodos() {
        return repository.findAll();
    }

    @PostMapping(value="/todos", produces = "application/json")
    public Todo createTodo(@RequestBody Todo todo) {
        return repository.save(todo);
    }

    @GetMapping(value="/todos/{id}", produces = "application/json")
    public Todo getTodo(@PathVariable String id) {
        return repository.findTodoById(id);
    }


    @PutMapping(value="/todos/{id}", produces = "application/json")
    public Todo deleteTodo(@RequestBody Todo newTodo, @PathVariable String id) {
        return repository.findById(id)
                .map(todo -> {
                    todo.setTask(newTodo.getTask());
                    todo.setStatus(newTodo.getStatus());
                    return repository.save(todo);
                })
                .orElseGet(() -> {
                    newTodo.setId(id);
                    return repository.save(newTodo);
                });
    }

    @DeleteMapping(value="/todos/{id}")
    public void deleteTodo(@PathVariable String id) {
        repository.deleteById(id);
    }
}
