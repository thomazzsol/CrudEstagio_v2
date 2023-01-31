const express = require("express");
const app = express();
const mysql = require("mysql"); 
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database: "crudgames",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req,res) => {

    const {idgame} = 0;
    const {name} = req.body;
    const {cost} = req.body;
    const {category} = req.body;

    console.log("name ", name)
    console.log("cost ", cost)
    console.log("category ", category)
    
    let InsertGame = "INSERT INTO crudgames.games values(?, ?, ?, ?);";

    db.query(InsertGame, [idgame, name, cost, category], (err, result) => {
        console.log(err);
    });
    });

app.get('/getCard', (req,res) =>{
    let SQLQuery = "SELECT * from games";

    db.query(SQLQuery, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3000, ()=>{
    console.log("Rodando servidor.");
});

