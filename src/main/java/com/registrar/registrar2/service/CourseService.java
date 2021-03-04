package com.registrar.registrar2.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registrar.registrar2.model.Courses;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.CourseRepository;
import com.registrar.registrar2.repository.StudentRepository;

@Service
public class CourseService {
	@Autowired
	private CourseRepository courseRepository;
	
	public List<Courses> getAllCourses(String subId) {
		List<Courses> listCourses = new ArrayList<>();
		courseRepository.findBySubjectId(subId).forEach(listCourses::add);
		return listCourses;
	}
	
	public Courses findCourse(String id) {
		return courseRepository.findById(id).orElse(null);
	}
	
	public void addCourse(Courses course) {
		courseRepository.save(course);
	}
	
	public void updateCourse(Courses course) {
		courseRepository.save(course);
	}

	public void delCourse(String id) {
		courseRepository.deleteById(id);
	}
}
