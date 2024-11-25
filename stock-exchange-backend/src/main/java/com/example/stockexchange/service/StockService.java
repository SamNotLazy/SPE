package com.example.stockexchange.service;

import com.example.stockexchange.model.Stock;
import com.example.stockexchange.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public Stock registerStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock getStockBySymbol(String stockSymbol) {
        return stockRepository.findByStockSymbol(stockSymbol);
    }
}

