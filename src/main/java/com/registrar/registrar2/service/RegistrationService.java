package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Student;
import com.registrar.registrar2.model.UserRoles;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;

    public String register(RegistrationRequest req) {
        System.out.println("service: "+req.toString());
        return appUserService.signUpUser(
                new Student(
                    req.getFirstName(), req.getLastName(),req.getUserName(),req.getPassword(), UserRoles.USER
                )
        );
    }
}
