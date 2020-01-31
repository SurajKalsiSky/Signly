package com.bucks.signly.api.service;

import com.bucks.signly.api.database.jpa.JpaBookingRepository;
import com.bucks.signly.api.database.jpa.models.Booking;
import com.bucks.signly.api.domain.BookingInfo;
import com.bucks.signly.api.domain.BookingState;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    JpaBookingRepository bookingRepository;

    @Autowired
    ObjectMapper jsonMapper;

    public void createBooking(BookingInfo bookingInfo) {
        Booking newBooking = Booking.builder()
                .companyName(bookingInfo.getUserInfo().getCompany())
                .bookingName(bookingInfo.getBookingName())
                .firstName(bookingInfo.getUserInfo().getFirstName())
                .lastName(bookingInfo.getUserInfo().getLastName())
                .emailAddress(bookingInfo.getUserInfo().getEmailAddress())
                .state(BookingState.PENDING)
                .timeFrom(LocalDateTime.now())
                .timeTo(LocalDateTime.now())
                .build();
        bookingRepository.save(newBooking);
    }

    public void updateBooking(int id, String interpreter) throws Exception {
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            booking.setInterpreter(interpreter);
            booking.setState(BookingState.ACCEPTED);
            booking.setTimeFrom(LocalDateTime.now());
            booking.setTimeTo(LocalDateTime.now());
            bookingRepository.save(booking);
        } else {
            //TODO: map exception 404 not exist
            throw new Exception("");
        }
    }


    public String getBooking(int id) throws Exception {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            return jsonMapper.writeValueAsString(booking);
        }
        //TODO: map exception with status code
        throw new Exception("Could not get booking");
    }

    public String getAllBookings() throws JsonProcessingException {
        List<Booking> allBookings = (List<Booking>) bookingRepository.findAll();
        return jsonMapper.writeValueAsString(allBookings);
    }
}
