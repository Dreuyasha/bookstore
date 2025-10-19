CREATE DATABASE IF NOT EXISTS bookstore;
USE bookstore;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO books (title, author) VALUES
('The Pragmatic Programmer', 'Andrew Hunt'),
('Clean Code', 'Robert C. Martin'),
('Atomic Habits', 'James Clear');
