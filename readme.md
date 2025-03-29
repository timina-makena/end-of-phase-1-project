Healthy Living Website

Overview
This project is a web application for showcasing and managing healthy food products, including vegetable salads, drinks, and fruits. It features CRUD operations and dynamic interactions.

Features
Display product categories (Vegetable Salads, Drinks, Fruits).

Add, edit, delete, and explore products.

Simple and responsive design.

Setup Instructions
Clone this repository to your local machine.

Install json-server globally if not already installed:

bash
Copy
Edit
npm install -g json-server
Start the JSON server:

bash
Copy
Edit
json-server --watch db.json
Open the index.html file in your browser to view the app.

Files
index.html: The main structure of the website.

style.css: Styles for the website.

index.js: JavaScript for dynamic functionality and CRUD operations.

db.json: Database file for the products.

Usage
View Products: Navigate to categories to see product details.

Add Product: Click the "Add Item" button and fill in the details.

Edit Product: Use the "Edit" button to update product information.

Delete Product: Use the "Delete" button to remove a product.

Dependencies
JSON Server for managing the database (db.json).

