const cors = require("cors");
const express  = require("express");

const app =  express();
const PORT =  5123;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let deportista = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        deportista
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    
    let Resultado = deportista.filter(p => p.id === id);
    if (deportista.length>0)
    {
        res.status(200).send(deportista[0]);
    }
    res.status(404).send({
        message:"No se encontro el elemento a buscar"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;

    deportista.push(body);
    res.status(200).send({
        message:"Datos guardados de manera correcta",
        body
    })
})
app.patch('/', (req,res)=>{
    const {id, Nombre,  Peso, Altura, Edad} = req.body;
    
    let Deportista =  deportista.filter(p=> p.id === id)[0] || {}

        Deportista= deportista[0]
        Deportista.Nombre= Nombre;
        Deportista.Peso= Peso;
        Deportista.Altura= Altura;
        Deportista.Edad= Edad;


    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: Deportista
        }
    )
})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    deportista = deportista.filter(p => p.id !== id);
    res.status(200).send({
        response:"Elemento eliminado "
    })
})
app.listen(PORT, ()=>{
    console.log(`Servidor en ejecucion en: http://localhost:${PORT}`)
})