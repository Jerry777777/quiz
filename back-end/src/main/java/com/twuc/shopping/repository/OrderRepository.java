package com.twuc.shopping.repository;

import com.twuc.shopping.po.OrderPo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends CrudRepository<OrderPo, Integer> {
    @Override
    List<OrderPo> findAll();

    Optional<OrderPo> findByProductId(Integer id);
}
