package com.registrar.registrar2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.StudentRepository;

@RestController
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@GetMapping("/student")
	public List<Student> getStudent(Student student) {
		return studentRepository.findAll();
	}
	
	@PostMapping("/student")
	public Student addStudent(Student student) {
		return studentRepository.save(student);
	}
	
}
