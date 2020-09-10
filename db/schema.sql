DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);

INSERT INTO burger (burger_name) VALUES ("Double Cheese");
INSERT INTO burger (burger_name) VALUES ("Triple Cheese");
INSERT INTO burger (burger_name) VALUES ("No Cheese");