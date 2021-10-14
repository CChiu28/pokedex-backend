package com.registrar.registrar2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.registrar.registrar2.model.MyUserDetails;
import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.repository.StudentRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	StudentRepository studentRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<Student> student = studentRepository.findByUserName(userName);
		student.orElseThrow(()->new UsernameNotFoundException("Not found: "+userName));
		return student.map(MyUserDetails::new).get();
	}

}
