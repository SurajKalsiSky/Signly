package api.repository;

import api.models.Booking;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Integer> {

    void delete(Booking booking);

    void deleteById(int id);

    Booking findBookingById(int id);

    Iterable<Booking> findAll();
}
