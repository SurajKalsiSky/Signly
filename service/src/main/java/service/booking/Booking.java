package service.booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "Booking")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    @GeneratedValue
    @Column(name = "booking_id")
    private  int id;

    @Column(name = "booking_name")
    private String bookingName;

    @NotNull
    @Column(name = "time_from")
    private LocalDateTime timeFrom;

    @NotNull
    @Column(name = "time_to")
    private LocalDateTime timeTo;

    @Column(name = "company_name")
    private String companyName;

    @NotNull
    @Column(name = "full_name")
    private String fullName;

    private BookingState state;
}
