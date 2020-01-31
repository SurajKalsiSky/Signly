package com.bucks.signly.api.resources.booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookerRequestInputData {
    String firstName;
    String lastName;
    String company;
    String bookingName;
    String emailAddress;
    String startTime;
    String endTime;

}