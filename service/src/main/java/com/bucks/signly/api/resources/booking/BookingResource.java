package com.bucks.signly.api.resources.booking;

import com.bucks.signly.api.database.BookingRepository;
import com.bucks.signly.api.database.models.Booking;
import com.bucks.signly.api.domain.BookingInfo;
import com.bucks.signly.api.domain.BookingState;
import com.bucks.signly.api.domain.UserInfo;
import com.bucks.signly.api.domain.UserType;
import com.bucks.signly.api.service.BookingService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class BookingResource {

    @Autowired
    BookingService bookingService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/bookings", consumes = "application/json")
    public void createBooking(@RequestBody RequestInputData requestBody) {
        UserInfo userInfo = new UserInfo(requestBody.firstName, requestBody.lastName, requestBody.company, requestBody.emailAddress, UserType.BOOKER);
        BookingInfo bookingInfo = new BookingInfo(userInfo, requestBody.bookingName, requestBody.startTime, requestBody.endTime, BookingState.PENDING);
        bookingService.createBooking(bookingInfo);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value="/bookings/{id}", consumes = "application/json")
    public void updateBooking(@PathVariable int id, @RequestBody RequestInputData requestBody) throws Exception {
        UserInfo userInfo = new UserInfo(requestBody.firstName, requestBody.lastName, requestBody.company, requestBody.emailAddress, UserType.BOOKER);
        BookingInfo bookingInfo = new BookingInfo(userInfo, requestBody.bookingName, requestBody.startTime, requestBody.endTime, BookingState.PENDING);
        bookingService.updateBooking(id, bookingInfo);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/bookings/{id}")
    public String getBooking(@PathVariable int id) throws Exception {
        BookingInfo bookingInfo = new BookingInfo();
        return bookingService.getBooking(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="/bookings")
    public String getBookings() throws JsonProcessingException {
        return bookingService.getAllBookings();
    }

}