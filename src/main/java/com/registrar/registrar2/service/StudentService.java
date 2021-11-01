package com.registrar.registrar2.service;

import java.util.*;
import org.springframework.stereotype.Service;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.StudentRepository;

@Service
public class StudentService {

	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		List<Student> listStudent = new ArrayList<>();
		studentRepository.findAll().forEach(listStudent::add);
		return listStudent;
	}
	
	public Student findStudent(int id) {
		return studentRepository.findById(id).orElse(null);
	}
	
	public void addStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void updateStudent(Student stud) {
		studentRepository.save(stud);
	}

	public void delStudent(int id) {
		studentRepository.deleteById(id);
	}
}
