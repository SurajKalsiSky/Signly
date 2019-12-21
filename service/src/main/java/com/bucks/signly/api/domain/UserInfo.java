package com.bucks.signly.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    String firstName;
    String lastName;
    String company;
    UserType userType;
}
