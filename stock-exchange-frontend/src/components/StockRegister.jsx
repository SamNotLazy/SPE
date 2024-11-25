import React, { useState } from "react";
import { registerStock } from "../services/api";

const StockRegister = () => {
  const [companyName, setCompanyName] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [domain, setDomain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerStock({ companyName, stockSymbol, quantity, price, domain });
      alert("Stock registered successfully!");
    } catch (error) {
      alert("Error registering stock!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register Stock</h2>
      <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      <input type="text" placeholder="Stock Symbol" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input type="number" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default StockRegister;
