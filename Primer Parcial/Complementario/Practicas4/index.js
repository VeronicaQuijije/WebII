const path = require('path');

const express = require('express');
const cors = require('cors');


const Puerto = 5505;


//Designacion de rutas
const urlTipoEjercicio = path.join(__dirname,"./TipoEjercicio.html")
const urlDeportista  = path.join(__dirname,"./Deportista.html")
const urlEjercicioRealizado = path.join(__dirname,"./EjercicioRealizado.html")
const urlError = path.join(__dirname, "./Error.html")

//Iniciar el servicio 
const server  = express();

server.use(cors()).use(express.json())

//Declaracion de las rutas

server.get('/tipoEjercicio', (req,res)=>{
    res.status(200).sendFile(urlTipoEjercicio);
})
server.get('/deportista', (req,res)=>{
    res.status(200).sendFile(urlDeportista);
})
server.get('/ejercicioRealizado', (req,res)=>{
    res.status(200).sendFile(urlEjercicioRealizado);
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})



//Declarar la ejecucion del servidor 
server.listen(Puerto, ()=>{
    console.log(`Servidor listo,  http://localhost:${Puerto}`);
})