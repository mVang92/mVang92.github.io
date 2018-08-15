DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  consumer_price FLOAT (10) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Logitech G502", "Computer Peripherals", "79.99", 8);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Logitech M720", "Computer Peripherals", "44.99", 3);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Canon 650D (Body Only)", "Digital Imaging", "349.99", 4);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Huggies 66 pack Diapers", "Babies", "24.99", 12);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Welch Fruit Snacks 3.5 oz", "Candy", "2.45", 15);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Starburst", "Candy", "1.99", 20);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Phillips Baby Bottle 4 pack", "Babies", "49.99", 3);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Sony Playstation 4", "Gaming", "249.99", 4);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("Microsoft Xbox One", "Gaming", "249.99", 5);

INSERT INTO products (product_name, department_name, consumer_price, stock_quantity)
VALUES ("ASUS ROG Spatha", "Computer Peripherals", "129.99", 6);

SELECT * FROM products;

-- UPDATE products SET stock_quantity = 55 WHERE item_id = 1;
-- SELECT * FROM products WHERE stock_quantity < 5;