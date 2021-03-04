package com.registrar.registrar2.controller;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.registrar.registrar2.model.Student;
//import com.registrar.registrar2.repository.StudentRepository;
import com.registrar.registrar2.service.StudentService;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService; 
//	private StudentRepository studentRepository;
	
	@GetMapping("/students")
	public List<Student> getStudent() {
		return studentService.getAllStudents();
	}
	
	@PostMapping("/students")
	public void addStudent(@RequestBody Student student) {
		studentService.addStudent(student);
		System.out.println(student);
	}
	
	@GetMapping("/students/{id}")
	public Student getStudent(@PathVariable String id) {
		return studentService.findStudent(id);
	}
	
	@PutMapping("/students/{id}")
	public void updateStudent(@RequestBody Student student, @PathVariable String id, String fname, String lname) {
		studentService.updateStudent(student);
	}
	
	@DeleteMapping("/students/{id}")
	public void delStudent(@PathVariable String id) {
		studentService.delStudent(id);
	}
}
