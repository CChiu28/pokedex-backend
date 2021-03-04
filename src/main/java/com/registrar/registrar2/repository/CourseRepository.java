package com.registrar.registrar2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.registrar.registrar2.model.Courses;

@Repository
public interface CourseRepository extends CrudRepository<Courses, String> {
	public List<Courses> findBySubjectId(String id);
	public List<Courses> findByName(String name);
}
