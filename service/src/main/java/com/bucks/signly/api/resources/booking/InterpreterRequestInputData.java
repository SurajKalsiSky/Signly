package com.bucks.signly.api.resources.booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InterpreterRequestInputData {
    String firstName;
    String lastName;
    String emailAddress;
}
