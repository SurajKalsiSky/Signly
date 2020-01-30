package com.bucks.signly.api.resources.booking;

import com.bucks.signly.api.database.BookingRepository;
import com.bucks.signly.api.database.models.Booking;
import com.bucks.signly.api.domain.BookingInfo;
import com.bucks.signly.api.domain.BookingState;
import com.bucks.signly.api.domain.UserInfo;
import com.bucks.signly.api.domain.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
public class BookingResource {

    @Autowired
    BookingRepository bookingRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/bookings", consumes = "application/json")
    public BookingInfoResponse createBooking(@RequestBody RequestInputData requestBody) {
        UserInfo userInfo = new UserInfo(requestBody.firstName, requestBody.lastName, requestBody.company, UserType.BOOKER);
        BookingInfo bookingInfo = new BookingInfo(userInfo, requestBody.startTime, requestBody.endTime, BookingState.PENDING);



        return new BookingInfoResponse(
                bookingInfo
        );
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value="/bookings/{id}", consumes = "application/json")
    public BookingInfoResponse updateBooking(@PathVariable int id, @RequestBody RequestInputData requestBody){
        UserInfo userInfo = new UserInfo(requestBody.firstName, requestBody.lastName, requestBody.company, UserType.BOOKER);
        BookingInfo bookingInfo = new BookingInfo(userInfo, requestBody.startTime, requestBody.endTime, BookingState.PENDING);

        //TODO: updateDatabase based on ID

        return new BookingInfoResponse(
                bookingInfo
        );
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/bookings/{id}")
    public BookingInfoResponse getBooking(@PathVariable int id){

        //TODO: get bookingInfo by id from db
        BookingInfo bookingInfo = new BookingInfo();
        return new BookingInfoResponse(
                bookingInfo
        );
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="/bookings")
    public String getBookings(){

        //TODO: get and return all bookings from database

        return "GET BOOKINGS SUCCESS";
    }

}