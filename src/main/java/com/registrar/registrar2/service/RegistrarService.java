package com.registrar.registrar2.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.registrar.registrar2.model.Student;

@Service
public class RegistrarService {
	private List<Student> students = new ArrayList<>();
	
	public List<Student> getAllStudents() {
		return students;
	}
	
	public Student findStudent(String id) {
		Student s = null;
		for (int i=0; i<students.size(); i++) {
			s = students.get(i);
			if (s.getId().equals(id))
				return s;
		}
		return s;
	}
	
	public void addStudent(Student student) {
		students.add(student);
	}
	
	public void updateStudent(Student stud, String id, String fname, String lname) {
		for (int i=0; i<students.size(); i++) {
			Student s = students.get(i);
			if (s.getId().equals(id)) {
				students.set(i, stud);
				return;
			}
		}
	}

	public void delStudent(String id) {
		students.removeIf(t -> t.getId().equals(id));
	}
}
