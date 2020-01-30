package com.bucks.signly.api.database.jpa;

import com.bucks.signly.api.database.jpa.models.Booking;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface JpaBookingRepository extends CrudRepository<Booking, Integer> {

    void delete(Booking booking);

    Optional<Booking> findById(int id);

    Iterable<Booking> findAll();

    Booking findByEmailAddress(String emailAddress);
}
