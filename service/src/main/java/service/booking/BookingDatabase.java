package service.booking;

import service.roles.Interpreter;

import java.util.List;

public interface BookingDatabase {

    void addBooking(Booking booking);
    void editBooking(Booking booking);

    void acceptBooking(Booking booking, Interpreter interpreter);

    List<Booking> getAllBookings();
    Booking getBooking();

}
