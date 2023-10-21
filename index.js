const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

// view engine configuration
app.set("view engine", "ejs");

// Get method
app.get('/', (req, res) => {
    res.render('todo.ejs');
});

// Post method
app.post('/', (req, res) => {
    console.log(req.body);
});

const PORT = process.env.PORT || 3000; // Utiliza el puerto proporcionado por el entorno de alojamiento o el puerto 3000 si se ejecuta localmente

app.listen(PORT, () => console.log(`Server Up and running on port ${PORT}`));
