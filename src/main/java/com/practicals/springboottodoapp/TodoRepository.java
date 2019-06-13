package com.practicals.springboottodoapp;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TodoRepository extends MongoRepository<Todo, String> {

    public List<Todo> findAll();

    public Todo findTodoById(String id);

}
