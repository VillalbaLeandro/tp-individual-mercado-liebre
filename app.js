const fs = require("fs");
const express = require("express");
const path = require("path");


const app = express();


app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded()); //interpretar desde el navegador los archivos json

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"))
});



// constante para cambiar la varaible de entorno solo es enviar el valor de la variable de entorno por consola

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Servidor iniciado en http://localhost:" + port);
})

// puerto diferento  ->   PORT=4000 npm run dev