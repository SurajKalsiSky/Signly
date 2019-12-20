package api.repository;

import api.models.Booking;
import api.models.BookingState;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
class BookingRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private BookingRepository bookingRepository;

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(entityManager).isNotNull();
        assertThat(bookingRepository).isNotNull();
    }

    @Test
    void deleteById() {
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
    void findBookingById() {
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
    void findBookingByCompanyName() {
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
    void findAll() {
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