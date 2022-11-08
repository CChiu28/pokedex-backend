package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.model.UserRoles;
import com.registrar.registrar2.repository.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final StudentRepository studentRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public String register(RegistrationRequest req) {
        System.out.println("service: "+req.toString());
        Student stud = new Student(req.getUserName(),req.getEmail(),req.getPassword(),UserRoles.USER);
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
