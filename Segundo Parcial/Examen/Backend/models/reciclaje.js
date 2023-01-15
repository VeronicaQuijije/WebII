const { Schema, model } = require("mongoose");




const ReciclajeSchema = Schema({

  
    fecha: {
        type: String,
        required:[true, 'El campo fecha es obligatorio']
    },

    hora: {
        type: String,
        required:[ true, 'El campo hora es obligatorio' ]
    },
    tiempo: {
        type: String,
        required:[ true, 'El campo tiempo es obligatorio' ]
    }, 
    calorias: {
        type: String,
        required:[ true, 'El campo calorias es obligatorio' ]
    }, 
})


module.exports= model('Reciclaje', ReciclajeSchema)