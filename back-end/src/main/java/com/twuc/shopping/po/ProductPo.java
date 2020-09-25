package com.twuc.shopping.po;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductPo {
    @Id
    @GeneratedValue
    private int id;

    private String name;

    private int price;

    private String unit;

    private String imageUrl;
}
