import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserRegister from "./components/UserRegister";
import StockRegister from "./components/StockRegister";
import StockAnalysis from "./components/StockAnalysis";
import MarketTrends from "./components/MarketTrends";
import TransactionHistory from "./components/TransactionHistory";
import "./styles/App.css";

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/stock/register" element={<StockRegister />} />
        <Route path="/stock/analysis" element={<StockAnalysis />} />
        <Route path="/market/trends" element={<MarketTrends />} />
        <Route path="/user/transactions" element={<TransactionHistory />} />
      </Routes>
    </div>
  </Router>
);

export default App;

