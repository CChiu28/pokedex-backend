package com.registrar.registrar2.controller;

import com.registrar.registrar2.service.RegistrationRequest;
import com.registrar.registrar2.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/register")
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping()
    public String register(@RequestBody RegistrationRequest request) {
        System.out.println("regController: "+request.toString());
        return registrationService.register(request);
    }
}
