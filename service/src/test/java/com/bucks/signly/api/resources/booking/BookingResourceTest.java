package com.bucks.signly.api.resources.booking;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.HashMap;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BookingResourceTest {

    @Autowired
    private MockMvc mvc;

    private ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void bookingEndpointReturns201CreatedStatusCode() throws Exception {

        Map<String, String> requestBodyData = new HashMap<>();
        requestBodyData.put("firstName","randomFirstName123");
        requestBodyData.put("lastName","randomLastName123");
        requestBodyData.put("company","randomCompany");
        requestBodyData.put("startTime","randomStartTime");
        requestBodyData.put("endTime","randomEndTime");

        mvc.perform(post("/bookings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestBodyData)))
                .andExpect(status().isCreated());
    }

    @Test
    public void bookingEndpointReturns201CreatedStatusCodeAndResponseBody() throws Exception {

        Map<String, String> requestBodyData = new HashMap<>();
        requestBodyData.put("firstName","randomFirstName123");
        requestBodyData.put("lastName","randomLastName123");
        requestBodyData.put("company","randomCompany");
        requestBodyData.put("startTime","randomStartTime");
        requestBodyData.put("endTime","randomEndTime");

        String expectedResponseBody = "{\"bookingInfo\":{\"userInfo\":{\"firstName\":\"randomFirstName123\",\"lastName\":\"randomLastName123\",\"company\":\"randomCompany\",\"userType\":\"BOOKER\"},\"startTime\":\"randomStartTime\",\"endTime\":\"randomEndTime\",\"bookingState\":\"PENDING\"}}";

        mvc.perform(post("/bookings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestBodyData)))
                .andExpect(status().isCreated())
                .andExpect(content().string(expectedResponseBody));
    }

    @Test
    public void bookingEndpointReturns400_no_request_body() throws Exception {
        mvc.perform(post("/bookings")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void bookingEndpointReturns404_incorrect_path() throws Exception {
        mvc.perform(post("/bookingDoesNotExist")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }
}