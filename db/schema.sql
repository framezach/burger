DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int AUTO_INCREMENT,
burger_name VARCHAR(75),
devoured BOOLEAN,
PRIMARY KEY (id)
);
