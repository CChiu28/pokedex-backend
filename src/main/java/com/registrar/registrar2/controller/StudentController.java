package com.registrar.registrar2.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.service.StudentService;

@RestController
@AllArgsConstructor
public class StudentController {

	private StudentService studentService;
	
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
	public Student getStudent(@PathVariable int id) {
		return studentService.findStudent(id);
	}
	
	@PutMapping("/students/{id}")
	public void updateStudent(@RequestBody Student student, @PathVariable String id, String fname, String lname) {
		studentService.updateStudent(student);
	}
	
	@DeleteMapping("/students/{id}")
	public void delStudent(@PathVariable int id) {
		studentService.delStudent(id);
	}
}
