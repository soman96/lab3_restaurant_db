# lab3_restaurant_db

COMP 3133 – Full Stack Development II  
Lab 03 MongoDB & Mongoose

## description

This project is a simple Node.js, Express, MongoDB, and Mongoose REST API for restaurant data.

It supports the following operations:

- get all restaurants
- get restaurants by cuisine
- sort restaurants by restaurant_id in ascending or descending order
- get delicatessen restaurants where city is not Brooklyn

## technologies used

- node.js
- express
- mongodb atlas
- mongoose
- postman
- dotenv

## project setup

### 1. Clone the repository

```bash
git clone <your-github-repo-link>
cd lab3_restaurant_database
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a .env file in the root folder and add
```bash
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
```
