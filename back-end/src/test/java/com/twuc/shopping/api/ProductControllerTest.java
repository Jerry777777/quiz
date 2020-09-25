package com.twuc.shopping.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {
    @Autowired
    MockMvc mockMvc;


    @Test
    void should_get_all_products() throws Exception {
        mockMvc.perform(get("/products").contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(6)))
                .andExpect(jsonPath("$[0].name", is("可乐1")))
                .andExpect(jsonPath("$[0].imageUrl", is("https://s.yam.com/XhFwj")))
                .andExpect(jsonPath("$[1].name", is("可乐2")))
                .andExpect(jsonPath("$[2].price", is(1)))
                .andExpect(jsonPath("$[3].unit", is("瓶")))
                .andExpect(status().isOk());
    }
}
