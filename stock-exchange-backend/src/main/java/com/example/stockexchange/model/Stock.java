package com.example.stockexchange.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String companyName;
    private String stockSymbol;
    private Integer quantity;
    private Double price;
    private String domain;
}
