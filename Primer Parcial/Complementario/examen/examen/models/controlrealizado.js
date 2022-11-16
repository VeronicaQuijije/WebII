const { Schema, model } = require("mongoose");




const EjercicioRealizadoSchema = Schema(
    {
        fecha:{
            type: String,

        },
        hora:{
            type: String,
        },
        tiempotranscurrido:{
            type: String,
        },
        caloriasquemadas:{
            type: String,
        },
        replicate:{
            type: Boolean,
        }

    }
);


module.exports = model('EjercicioRealizado', EjercicioRealizadoSchema );