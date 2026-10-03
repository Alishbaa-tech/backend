// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("My name  is ALishba!");
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });

// supabase + database 
// posthresql + mysql
// ho wto create tables with quieres (migartions files
//  edge funnction

// test cases


import express from 'express'
import pool from './db.js'

const app = express();


app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 30000
    },
    {
      "id": 3,
      "name": "Keyboard",
      "price": 5000
    }
];

// GET
app.get('/products', (req, res) => {
    res.json(products);
});


// CREATE / POST
app.post('/products', (req, res) => {

    const newProduct = req.body;

    products.push(newProduct);

    res.json(newProduct);
});

pool.query("SELECT NOW()", (error, result) => {

    if (error) {

        console.log("Database connection error:", error);

    } else {

        console.log("Database is connected:", result.rows[0]);

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
