const { response, request } = require('express');
const Ejercicio = require('../models/ejercicio');
const Reciclaje = require('../models/reciclaje');




const EjercicioGet = async (req, res=response) =>{ 
    const ejercicio = await Ejercicio.find();
        
    
    res.status(200).json(
        {ejercicio})
}
const EjercicioPost = async (req, res=response) =>{ 
    const { fecha, hora, tiempo, calorias } = req.body; 
    const ejercicio = new Ejercicio({ fecha, hora, tiempo, calorias })

    await ejercicio.save();
    res.status(200).json(
            {ejercicio}

    )
}





const EjercicioDelete = async (req= request, res=response) =>{
    const {id}= req.params;
  
        const { fecha, hora, tiempo, calorias} = await Ejercicio.findById(id)

       

        const reciclaje = new Reciclaje({fecha:fecha,hora:hora,  tiempo:tiempo , calorias: calorias})
        await reciclaje.save();
    

        const ejercicio = await Ejercicio.findByIdAndDelete(id)

    res.status(200).json({

        ejercicio

    })
}

module.exports={ EjercicioDelete, EjercicioGet, EjercicioPost
}