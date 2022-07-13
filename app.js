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




app.listen(3040, () => {
  console.log("se ha iniciado el servidor con EXPRESS http://localhost:3040");
})