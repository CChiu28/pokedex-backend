package com.registrar.registrar2.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.registrar.registrar2.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
	Optional<Student> findByUserName(String userName);
	Optional<Student> deleteByUserName(String userName);
}
