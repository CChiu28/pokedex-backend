package com.registrar.registrar2.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.service.StudentService;

@RestController
//@RequestMapping(path="/students")
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
	
	@GetMapping("/students/{userName}")
	public Student getStudent(@PathVariable String userName) {
		return studentService.findStudent(userName);
	}
	
	@PutMapping("/students/{id}")
	public void updateStudent(@RequestBody Student student, @PathVariable String id, String fname, String lname) {
		studentService.updateStudent(student);
	}
	
	@DeleteMapping("/students/{userName}")
	public void delStudent(@PathVariable String userName) {
		studentService.delStudent(userName);
	}
}
