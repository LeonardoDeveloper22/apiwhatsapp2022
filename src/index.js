const express = require("express"); //Requerimos Express
const app = express(); //Guardamos en una constante
const morgan = require("morgan"); //Requerimos Express
const path = require('path');

//settings
app.set('port', process.env.YOUR_PORT || process.env.PORT || 80); //Valida si existe un puerto
app.set('json space', 2); //Espacio dentro del JSON

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Recibir e interpretar (input- form)
app.use(express.json());//Permite recibir y entender formatos JSON


app.use('/api/whatsapp/v1/iniciarsesion',require('./routes/iniciarsesion'));

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, () => {
    console.log(`Server on Port ${server_port}`);
});


