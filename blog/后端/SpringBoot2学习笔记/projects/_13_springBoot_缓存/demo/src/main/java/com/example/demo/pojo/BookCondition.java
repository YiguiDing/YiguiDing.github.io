package com.example.demo.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class BookCondition {
    Long id;
    String name;
    String description;
    Double priceMax;
    Double priceMin;
}
