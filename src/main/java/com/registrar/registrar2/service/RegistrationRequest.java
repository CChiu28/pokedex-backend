package com.registrar.registrar2.service;

import com.registrar.registrar2.model.UserRoles;
import lombok.*;

@Getter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    private final String userName;
    private final String password;
//    private final UserRoles roles;

//    @Override
//    public String toString() {
//        return "RegistrationRequest{" +
//                "firstName='" + firstName + '\'' +
//                ", lastName='" + lastName + '\'' +
//                ", userName='" + userName + '\'' +
//                ", password='" + password + '\'' +
//                '}';
//    }

//    public String getFirstName() {
//        return firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public String getUserName() { return userName; }

}
