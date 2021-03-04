package com.registrar.registrar2.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		List<Student> listStudent = new ArrayList<>();
		studentRepository.findAll().forEach(listStudent::add);
		return listStudent;
	}
	
	public Student findStudent(String id) {
		return studentRepository.findById(id).orElse(null);
	}
	
	public void addStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void updateStudent(Student stud) {
		studentRepository.save(stud);
	}

	public void delStudent(String id) {
		studentRepository.deleteById(id);
	}
}
