package com.registrar.registrar2.service;

public class StudentNotFoundException extends RuntimeException {

    StudentNotFoundException(String userName) {
        super("No student found: "+userName);
    }
}
