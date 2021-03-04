package com.registrar.registrar2.controller;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.registrar.registrar2.model.Courses;
import com.registrar.registrar2.model.Subjects;
import com.registrar.registrar2.service.CourseService;

@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseService; 
//	private StudentRepository studentRepository;
	
	@GetMapping("/subjects/{subId}/courses")
	public List<Courses> getStudent(@PathVariable String subId) {
		return courseService.getAllCourses(subId);
	}
	
	@PostMapping("/subjects/{subId}/courses/")
	public void addCourse(@RequestBody Courses course, @PathVariable String subId) {
		course.setSubject(new Subjects(subId,"",""));
		courseService.addCourse(course);
		System.out.println(course);
	}
	
	@GetMapping("/subjects/{subId}/courses/{id}")
	public Courses getCourse(@PathVariable String id) {
		return courseService.findCourse(id);
	}
	
	@PutMapping("/subjects/{id}/courses/{id}")
	public void updateCourse(@RequestBody Courses course, @PathVariable String id, String fname, String lname) {
		courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{id}")
	public void delStudent(@PathVariable String id) {
		courseService.delCourse(id);
	}
}
