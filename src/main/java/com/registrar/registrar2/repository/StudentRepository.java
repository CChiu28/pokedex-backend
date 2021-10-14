package com.registrar.registrar2.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.registrar.registrar2.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
	Optional<Student> findByUserName(String userName);
}
