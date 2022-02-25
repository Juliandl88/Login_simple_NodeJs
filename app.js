
//1- Invocamos a express
const express = require('express');
const app = express();

//2- Seteamos urlencoded para capturar los datos del formulario sin errores   
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//3- Invocamos DotEnv para leer las variables de entorno
const dotenv = require('dotenv');
dotenv.config({path: "./env/.env"});

//4- Seteamos el directorio public
app.use("/resorces", express.static("/public"));
app.use("/resorces", express.static(__dirname + "/public"));

//5- Establecemos el motor de plantillas
app.set("view engine", "ejs");

//6- Invocamos el modulo para el hashing del password
const bcryptjs = require("bcryptjs");

//7- Variables de session
const session = require("express-session");
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

//8- Invocamos el módulo de conexión de la base de datos
const conection = require("./database/db");

//9- Estableciendo las rutas

app.get('/', (req, res) => {
    res.render('index');  
});

app.listen(3000, (req, res) => {
    console.log("El servidor está corriendo en el puerto 3000");
});