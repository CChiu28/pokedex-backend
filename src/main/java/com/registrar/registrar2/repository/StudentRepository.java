package com.registrar.registrar2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registrar.registrar2.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
