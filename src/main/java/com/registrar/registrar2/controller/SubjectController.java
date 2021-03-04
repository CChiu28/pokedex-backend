package com.registrar.registrar2.controller;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.registrar.registrar2.model.Subjects;
import com.registrar.registrar2.service.SubjectService;

@RestController
public class SubjectController {
	
	@Autowired
	private SubjectService subjectService; 
//	private StudentRepository studentRepository;
	
	@GetMapping("/subjects")
	public List<Subjects> getStudent() {
		return subjectService.getAllSubjects();
	}
	
	@PostMapping("/subjects")
	public void addStudent(@RequestBody Subjects subject) {
		subjectService.addSubject(subject);
		System.out.println(subject);
	}
	
	@GetMapping("/subjects/{id}")
	public Subjects getStudent(@PathVariable String id) {
		return subjectService.findSubject(id);
	}
	
	@PutMapping("/subjects/{id}")
	public void updateStudent(@RequestBody Subjects subject, @PathVariable String id, String fname, String lname) {
		subjectService.updateSubject(subject);
	}
	
	@DeleteMapping("/subjects/{id}")
	public void delStudent(@PathVariable String id) {
		subjectService.delSubject(id);
	}
}
