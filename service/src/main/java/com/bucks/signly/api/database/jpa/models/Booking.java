package com.bucks.signly.api.database.jpa.models;

import com.bucks.signly.api.domain.BookingState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "Booking")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "booking_id")
    private int id;

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
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Column(name = "last_name")
    private String lastName;

    @NotNull
    @Column(name = "email_address")
    private String emailAddress;

    @NotNull
    @Column(name = "state")
    private BookingState state;

    @Column(name = "interpreter")
    private String interpreter;

}