package com.example.stockexchange.controller;

import com.example.stockexchange.model.Stock;
import com.example.stockexchange.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {
    @Autowired
    private StockService stockService;

    @PostMapping("/register")
    public Stock registerStock(@RequestBody Stock stock) {
        return stockService.registerStock(stock);
    }

    @GetMapping("/{symbol}")
    public Stock getStock(@PathVariable String symbol) {
        return stockService.getStockBySymbol(symbol);
    }
}
