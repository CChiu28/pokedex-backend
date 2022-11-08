package com.registrar.registrar2;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.registrar.registrar2.repository.StudentRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
//@EnableJpaRepositories(basePackageClasses = StudentRepository.class)
@EnableMongoRepositories
public class RegistrarApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrarApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
//		return args -> {
//			Student stud = new Student("123","jack","mack");
//			studentRepository.save(stud);
//		};
//	}
}
