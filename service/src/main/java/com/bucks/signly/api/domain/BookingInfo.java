package com.bucks.signly.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingInfo {
    UserInfo userInfo;
    String bookingName;
    String startTime;
    String endTime;
    BookingState bookingState;

}
