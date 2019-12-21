package com.bucks.signly.api.resources.booking;

import com.bucks.signly.api.domain.BookingInfo;
import com.bucks.signly.api.domain.BookingState;
import com.bucks.signly.api.domain.UserInfo;
import com.bucks.signly.api.domain.UserType;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingResource {

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/bookings", consumes = "application/json")
    public CreateBookingResponse createBooking(@RequestBody RequestInputData requestBody) {
        UserInfo userInfo = new UserInfo(requestBody.firstName, requestBody.lastName, requestBody.company, UserType.BOOKER);
        BookingInfo bookingInfo = new BookingInfo(userInfo, requestBody.startTime, requestBody.endTime, BookingState.PENDING);
        return new CreateBookingResponse(
                bookingInfo
        );
    }
}