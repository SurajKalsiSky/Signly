package api;

import java.time.LocalDateTime;

import api.models.Booking;
import api.models.BookingState;
import api.repository.BookingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(BookingRepository repository) {
        return args -> {

            System.out.println("Adding data to H2 database");

            // save a few bookings
            repository.save(
                Booking.builder()
                    .bookingName("Breakfast")
                    .timeFrom(LocalDateTime.of(2020, 01, 02, 8, 30))
                    .timeTo(LocalDateTime.of(2020, 01, 02, 9, 30))
                    .companyName("Natwest")
                    .fullName("Tom Hardy")
                    .state(BookingState.ACCEPTED)
                .build()
            );

            repository.save(
                Booking.builder()
                    .bookingName("Wealth Management")
                    .timeFrom(LocalDateTime.of(2020, 03, 14, 12, 30))
                    .timeTo(LocalDateTime.of(2020, 03, 14, 14, 30))
                    .companyName("Ciara Harris")
                    .fullName("Tom Hardy")
                    .state(BookingState.PENDING)
                .build()
            );

            repository.save(
                Booking.builder()
                    .bookingName("New Account")
                    .timeFrom(LocalDateTime.of(2020, 05, 16, 10, 00))
                    .timeTo(LocalDateTime.of(2020, 05, 16, 11, 00))
                    .companyName("HSBC")
                    .fullName("Kelly Rowland")
                    .state(BookingState.ACCEPTED)
                .build()
            );

            repository.save(
                Booking.builder()
                    .bookingName("Business Account Setup")
                    .timeFrom(LocalDateTime.of(2020, 01, 11, 15, 00))
                    .timeTo(LocalDateTime.of(2020, 01, 11, 16, 00))
                    .companyName("HSBC")
                    .fullName("Kelly Rowland")
                    .state(BookingState.ACCEPTED)
                .build()
            );

            System.out.println("Successfully added data to database");
        };
    }
}