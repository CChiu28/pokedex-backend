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
	
	@GetMapping("/liststudent")
	public List<Student> getStudent() {
		return studentRepository.findAll();
	}
	
	@PostMapping("/savestudent")
	public Student addStudent(Student student) {
		return studentRepository.save(student);
	}
	
	@RequestMapping("/studenttest")
	public String test() {
		return "test";
	}
}
