package com.registrar.registrar2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.registrar.registrar2.model.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, String> {

}
