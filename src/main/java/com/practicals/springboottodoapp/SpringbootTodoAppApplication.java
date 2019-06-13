package com.practicals.springboottodoapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootTodoAppApplication {

	@Autowired
	private TodoRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootTodoAppApplication.class, args);
	}

}
