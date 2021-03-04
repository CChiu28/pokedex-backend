package com.registrar.registrar2.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registrar.registrar2.model.Subjects;
import com.registrar.registrar2.repository.SubjectRepository;

@Service
public class SubjectService {
	@Autowired
	private SubjectRepository subjectRepository;
	
	public List<Subjects> getAllSubjects() {
		List<Subjects> listSubjects = new ArrayList<>();
		subjectRepository.findAll().forEach(listSubjects::add);
		return listSubjects;
	}
	
	public Subjects findSubject(String id) {
		return subjectRepository.findById(id).orElse(null);
	}
	
	public void addSubject(Subjects subject) {
		subjectRepository.save(subject);
	}
	
	public void updateSubject(Subjects subject) {
		subjectRepository.save(subject);
	}

	public void delSubject(String id) {
		subjectRepository.deleteById(id);
	}
}
