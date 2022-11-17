package com.registrar.registrar2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
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
