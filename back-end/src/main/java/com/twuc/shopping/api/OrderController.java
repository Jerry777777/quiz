package com.twuc.shopping.api;

import com.twuc.shopping.po.OrderPo;
import com.twuc.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.util.List;
import java.util.Optional;

public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/order")
    public ResponseEntity<Object> addOrder(@RequestBody OrderPo orderPo) {
        Optional<OrderPo> dtoOptional = orderRepository.findByProductId(orderPo.getProductId());
        OrderPo currentOrder;
        if(dtoOptional.isPresent()) {
            currentOrder = dtoOptional.get();
            currentOrder.setCount(currentOrder.getCount() + 1);
        } else {
            currentOrder = orderPo;
        }
        currentOrder = orderRepository.save(currentOrder);
        return ResponseEntity.created(URI.create("/order/" + currentOrder.getId())).build();
    }

    @GetMapping("/orders")
    public ResponseEntity<List<OrderPo>> getOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }
}
