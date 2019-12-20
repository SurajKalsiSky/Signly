package com.bucks.signly.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingInfo {
    UserInfo userInfo;
    String startTime;
    String endTime;
    BookingState bookingState;

    @Override
    public String toString() {
        return "BookingInfo{" +
                "userInfo=" + userInfo +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", bookingState=" + bookingState +
                '}';
    }
}
