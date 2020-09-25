package com.twuc.shopping.api;

import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity<List<ProductPo>> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }
}
