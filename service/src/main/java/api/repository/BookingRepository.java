package api.repository;

import api.models.Booking;
import org.springframework.data.repository.CrudRepository;
import api.models.Interpreter;

import java.util.List;

public interface BookingDatabase extends CrudRepository<Booking, Integer> {

   // void addBooking(Booking booking);
   // void editBooking(Booking booking);

   // void acceptBooking(Booking booking, Interpreter interpreter);

    void delete(Booking booking);

    Booking findBookingById(int id);

    Iterable<Booking> findAll();



}
