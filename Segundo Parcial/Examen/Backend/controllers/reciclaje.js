const { response, request } = require('express');
const Ejercicio = require('../models/ejercicio');
const Reciclaje = require('../models/reciclaje');


const ReciclajeGet = async (req, res=response) =>{ 

    const reciclaje = await Reciclaje.find();
    res.status(200).json(
        reciclaje
    )
}


const ReciclajeDelete = async (req= request, res=response) =>{
    const {id}= req.params; 

  
        const {fecha, hora, tiempo, calorias} = await Reciclaje.findById(id)
        
        const ejercicio = new Ejercicio({fecha:fecha,hora:hora,tiempo:tiempo, calorias:calorias})
        await ejercicio.save();
    

        const reciclaje = await Reciclaje.findByIdAndDelete(id)

    res.status(200).json({

        reciclaje

    })
}
module.exports={
 ReciclajeGet ,
    ReciclajeDelete
}