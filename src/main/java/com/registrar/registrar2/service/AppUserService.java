package com.registrar.registrar2.service;

import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.registrar.registrar2.model.AppUserDetails;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.StudentRepository;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

	private final StudentRepository studentRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		System.out.println(userName);
		Optional<Student> student = studentRepository.findByUserName(userName);
		System.out.println(student);
		student.orElseThrow(()->new UsernameNotFoundException("Not found: "+userName));
		return student.map(AppUserDetails::new).get();
	}

	public String signUpUser(Student stud) {
		System.out.println("appuserservice: "+stud.toString());
		boolean studExists = studentRepository.findByUserName(stud.getUserName()).isPresent();
		if (studExists) {
			throw new IllegalStateException("student already exists");
		}
		String encodedPW = bCryptPasswordEncoder.encode(stud.getPassword());
		stud.setPassword(encodedPW);
		studentRepository.save(stud);
		return "stuent";
	}
}
