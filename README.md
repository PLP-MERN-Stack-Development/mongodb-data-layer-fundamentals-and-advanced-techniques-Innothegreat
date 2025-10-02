# MongoDB Fundamentals - Week 1

## Overview

This project demonstrates the fundamentals of working with MongoDB, including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing. It is designed as part of a learning assignment for MongoDB data layer techniques.

You will use Node.js scripts and MongoDB Shell queries to interact with a sample bookstore database.

## Features

- Populates a MongoDB collection with sample book data using Node.js
- Demonstrates CRUD (Create, Read, Update, Delete) operations
- Includes advanced queries, projections, sorting, and pagination
- Shows aggregation pipelines for analytics
- Implements indexing for performance optimization

## Prerequisites

- **Node.js** (v18 or higher) — [Download here](https://nodejs.org/)
- **MongoDB Community Edition** — [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
- **MongoDB Shell (mongosh)** — Included with MongoDB Community Edition
- (Optional) **MongoDB Compass** for GUI-based database management

## Setup Instructions

1. **Clone the repository**  
   Accept the GitHub Classroom invitation and clone your personal repository.

2. **Install dependencies**  
   Open a terminal in your assignment directory and run:
   ```bash
   npm install
   ```

3. **Start MongoDB**  
   Make sure your MongoDB server is running locally (default: `mongodb://localhost:27017`).

## How to Run the Scripts

### 1. Populate the Database

Run the following command to insert sample book data into your MongoDB database:

```bash
node insert_books.js
```

- This script connects to your local MongoDB server.
- It creates a database called `plp_database` and a collection called `books`.
- If the collection already exists, it will be dropped and recreated with fresh data.

### 2. Run Example Queries

- Open the [`queries.js`](queries.js) file to see a collection of MongoDB queries and aggregation pipelines.
- You can copy and paste these queries into the MongoDB Shell (`mongosh`) to interact with your data.

Example:
```bash
mongosh
use plp_database
// Then paste queries from queries.js
```

### 3. Explore with MongoDB Compass (Optional)

- Open MongoDB Compass and connect to `mongodb://localhost:27017`.
- Browse the `plp_database` and view the `books` collection.

## Files Included

- [`insert_books.js`](insert_books.js): Node.js script to populate the database with sample books.
- [`queries.js`](queries.js): MongoDB queries and aggregation pipelines for practice.
- [`Week1-Assignment.md`](Week1-Assignment.md): Assignment instructions.
- [`SETUP_INSTRUCTIONS.md`](SETUP_INSTRUCTIONS.md): Troubleshooting and setup help.
- `Mongodb Compass Screenshot.PNG`: Screenshot of your database in MongoDB Compass.

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

**Tip:** If you encounter `Cannot find module 'mongodb'`, run `npm install mongodb` in your project directory.