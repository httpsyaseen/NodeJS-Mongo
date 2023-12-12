
# Node.js and MongoDB MVC Application Documentation

## Overview

This repository contains a Node.js web application following the MVC (Model-View-Controller) architecture. The application is designed for handling products with CRUD operations, including listing, updating, and deleting.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **EJS (Embedded JavaScript)**: Templating engine for rendering dynamic content.
- **Multer**: Middleware for handling file uploads.

## Project Structure

The project follows a standard MVC structure:

- **`/models`**: Contains data models for interacting with the database.
- **`/views`**: EJS templates for rendering HTML views.
- **`/controllers`**: Handles the application logic and interacts with models.
- **`/routes`**: Defines the routes for different parts of the application.
- **`/public`**: Static files (stylesheets, scripts, images, etc.).
- **`app.js`**: Entry point for the application.

## Dependencies

- Express
- Mongoose
- EJS
- Multer


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/httpsyaseen/NodeJS-Mongo.git
   ```

2. Install dependencies:

   ```bash
   cd NodeJS-Mongo
   npm install
   ```

3. Configure MongoDB connection:

   - Open `config/database.js` and update the MongoDB connection string.

## Running the Application

```bash
node app
```

The application will be accessible at `http://localhost:80`.

## Features

### 1. Product Listing

- Visit `/products` to view a list of all products.

### 2. Adding a Product

- Navigate to `/products/addproduct` to add a new product.

### 3. Updating a Product

- Click on the "Edit" button next to a product on the listing page (`/products/updateproduct`) to update its details.

### 4. Deleting a Product

- Click on the "Delete" button next to a product on the listing page (`/products/deleteproduct`) to remove it.

### 5. File Uploads

- Product images can be uploaded using Multer middleware.


