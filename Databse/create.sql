CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- To store encrypted passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stocks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    stock_symbol VARCHAR(10) UNIQUE NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL, -- Current price per stock
    domain VARCHAR(50), -- e.g., IT, agriculture, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    stock_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    action ENUM('BUY', 'SELL') NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL, -- Quantity * price
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (stock_id) REFERENCES stocks(id) ON DELETE CASCADE
);

CREATE TABLE market_trends (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    stock_id BIGINT NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (stock_id) REFERENCES stocks(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password_hash) VALUES
('Alice', 'alice@example.com', 'hashed_password1'),
('Bob', 'bob@example.com', 'hashed_password2'),
('Charlie', 'charlie@example.com', 'hashed_password3');

INSERT INTO stocks (company_name, stock_symbol, quantity, price, domain) VALUES
('TechCorp', 'TCH', 500, 150.00, 'IT'),
('AgriGrow', 'AGR', 1000, 75.50, 'Agriculture'),
('MediCare', 'MED', 800, 120.75, 'Healthcare');

INSERT INTO transactions (user_id, stock_id, quantity, action, total_price) VALUES
(1, 1, 10, 'BUY', 1500.00),
(2, 2, 20, 'BUY', 1510.00),
(3, 1, 5, 'SELL', 750.00);

INSERT INTO market_trends (stock_id, recorded_at, price) VALUES
(1, '2024-11-23 10:00:00', 150.00),
(1, '2024-11-23 11:00:00', 152.50),
(2, '2024-11-23 10:00:00', 75.50),
(2, '2024-11-23 11:00:00', 74.25);

