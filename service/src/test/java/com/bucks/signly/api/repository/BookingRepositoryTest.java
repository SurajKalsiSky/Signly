package com.bucks.signly.api.repository;

import com.bucks.signly.api.database.BookingRepository;
import com.bucks.signly.api.database.models.Booking;
import com.bucks.signly.api.domain.BookingState;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class BookingRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private BookingRepository bookingRepository;

    @Test
    public void verifyingInjectedComponentsAreNotNull(){
        assertThat(entityManager).isNotNull();
        assertThat(bookingRepository).isNotNull();
    }

    @Test
    public void deleteById() {
        //Given
        Booking booking = Booking.builder()
                    .bookingName("Wealth Management")
                    .timeFrom(LocalDateTime.of(2020, 03, 14, 12, 30))
                    .timeTo(LocalDateTime.of(2020, 03, 14, 14, 30))
                    .companyName("Barclays")
                    .fullName("Ciara Harris")
                    .state(BookingState.PENDING)
                .build();

        final Integer id = entityManager.persistAndGetId(booking, Integer.class);
        entityManager.flush();

        //When
        bookingRepository.deleteById(id);
        Booking result = entityManager.find(Booking.class, id);

        //Then
        assertThat(result).isNull();
    }

    @Test
    public void findBookingById() {
        //Given
        Booking booking = Booking.builder()
                    .bookingName("New Account")
                    .timeFrom(LocalDateTime.of(2020, 03, 14, 12, 30))
                    .timeTo(LocalDateTime.of(2020, 03, 14, 14, 30))
                    .companyName("HSBC")
                    .fullName("James Lowe")
                    .state(BookingState.ACCEPTED)
                .build();

        final Integer id = entityManager.persistAndGetId(booking, Integer.class);
        entityManager.flush();

        //When
        bookingRepository.findById(id);
        Booking result = entityManager.find(Booking.class, id);

        //Then
        assertThat(result).isNotNull();
        assertThat(result.getBookingName()).isEqualTo("New Account");
        assertThat(result.getCompanyName()).isEqualTo("HSBC");
    }

    @Test
    public void findBookingByCompanyName() {
        //Given
        Booking booking1 = Booking.builder()
                .bookingName("Wealth Management")
                .timeFrom(LocalDateTime.of(2020, 03, 14, 12, 30))
                .timeTo(LocalDateTime.of(2020, 03, 14, 14, 30))
                .companyName("Barclays")
                .fullName("Ciara Harris")
                .state(BookingState.PENDING)
                .build();

        Booking booking2 = Booking.builder()
                .bookingName("Breakfast Meeting")
                .timeFrom(LocalDateTime.of(2020, 02, 11, 9, 30))
                .timeTo(LocalDateTime.of(2020, 02, 11, 10, 30))
                .companyName("Natwest")
                .fullName("Tom Hardy")
                .state(BookingState.ACCEPTED)
                .build();

        entityManager.persist(booking1);
        entityManager.persist(booking2);
        entityManager.flush();

        //When
        Booking result = bookingRepository.findByCompanyName("Barclays");

        //Then
        assertThat(result.getBookingName()).isEqualTo("Wealth Management");
        assertThat(result.getFullName()).isEqualTo("Ciara Harris");
        assertThat(result.getState()).isEqualTo(BookingState.PENDING);

    }

    @Test
    public void findAll() {
        //Given
        Booking booking1 = Booking.builder()
                .bookingName("Wealth Management")
                .timeFrom(LocalDateTime.of(2020, 03, 14, 12, 30))
                .timeTo(LocalDateTime.of(2020, 03, 14, 14, 30))
                .companyName("Barclays")
                .fullName("Ciara Harris")
                .state(BookingState.PENDING)
                .build();

        Booking booking2 = Booking.builder()
                .bookingName("Breakfast Meeting")
                .timeFrom(LocalDateTime.of(2020, 02, 11, 9, 30))
                .timeTo(LocalDateTime.of(2020, 02, 11, 10, 30))
                .companyName("Natwest")
                .fullName("Tom Hardy")
                .state(BookingState.ACCEPTED)
                .build();

        entityManager.persist(booking1);
        entityManager.persist(booking2);
        entityManager.flush();

        //When
        Iterable<Booking> result = bookingRepository.findAll();

        //Then
        assertThat(result).isNotNull();
        assertThat(result).size().isEqualTo(2);
    }
}