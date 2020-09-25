package com.twuc.shopping.repository;

import com.twuc.shopping.po.OrderPo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<OrderPo, Integer> {
    @Override
    List<OrderPo> findAll();
}
