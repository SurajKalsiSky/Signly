package com.bucks.signly.api.resources.booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestInputData {
    String firstName;
    String lastName;
    String company;
    String bookingName;
    //todo: change below into date objects
    String startTime;
    String endTime;
}