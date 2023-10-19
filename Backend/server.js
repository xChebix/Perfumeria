const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "perfumesite"
})
db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
      throw err;
    }
    console.log('Connected to the database');
  });

app.get("/", (re,res)=> {
    return res.json('From backend side');
})
app.get("/user", (req,res)=> {
    const sql = "SELECT * from user";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get("/products", (req,res)=> {
    const sql = "SELECT * from product";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/reviews", (req,res)=> {
    const sql = "SELECT * from reviews";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// Define a route to handle the POST request
app.post('/add-review', (req, res) => {
    const { review } = req.body;
  
    // Insert the review into the database
    const query = 'INSERT INTO reviews (review) VALUES (?)';
    db.query(query, [review], (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
    });
  });
app.post('/login', (req,res) =>{
    const query = "select * from user where username = ? and password = ?";
    
    db.query(query, [req.body.username, req.body.password], (err,data) =>{
        if(err) return res.json("Login Failed");
        if(data.length > 0) {
            return res.json("Login Successfully")
        } else{
            return res.json("No record")
        }
    })
}) 
app.listen(8081,()=> {
    console.log("Listening");
})