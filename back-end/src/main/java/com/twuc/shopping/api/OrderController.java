package com.twuc.shopping.api;

import com.twuc.shopping.po.OrderPo;
import com.twuc.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;

public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/order")
    public ResponseEntity<Object> addOrder(@RequestBody OrderPo orderPo) {
        orderRepository.save(orderPo);
        return ResponseEntity.created(URI.create("/order/" + orderPo.getId())).build();
    }
}
