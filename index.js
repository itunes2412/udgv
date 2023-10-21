const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

// view engine configuration
app.set("view engine", "ejs");

// Get method
app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

// Post method
app.post('/',(req, res) => {
    console.log(req.body);
    });

app.listen(3000, () => console.log("Server Up and running"));

// Iniciar proceso con: npm start

// Fuente: https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583