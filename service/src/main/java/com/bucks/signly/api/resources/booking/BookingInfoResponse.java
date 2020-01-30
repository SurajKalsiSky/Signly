package com.bucks.signly.api.resources.booking;

import com.bucks.signly.api.domain.BookingInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingInfoResponse {
    BookingInfo bookingInfo;

    //TODO: manipulate bookingInfo into json response
}
