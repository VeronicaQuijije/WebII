const { response, request } = require('express');
const ControlRealizado = require('../models/controlrealizado');
const EntidadDuplicada = require('../models/EntidadDuplicada');




const postControl = async (req, res=response) =>{ 

    const contol1 = new ControlRealizado({fecha:'15/25/22', hora:'19 horas', observacion:'correcto', tiempotranscurrido:'2.00',  caloriasquemadas:'25',  replicate:false})
    const control2 = new ControlRealizado({fecha:'15/25/22', hora:'19 horas', observacion:'correcto', tiempotranscurrido:'2.00', caloriasquemadas:'25',  replicate:false})
    const control3 = new ControlRealizado({fecha:'15/25/22', hora:'19 horas', observacion:'correcto', tiempotranscurrido:'2.00', caloriasquemadas:'25',  replicate:false})
    const insercion1 = await contol1.save();
    const insercion2 = await control2.save();
    const insercion3 = await control3.save();
    
}


const datosDUplicados = async (req= request, res=response) =>{
  
    const control = await ControlRealizado.find()
    for(let i=0; i<control.length; i++){
        if(control[i].replicate ===false){
            const insercionDuplicados = new EntidadDuplicada(
                {fecha: control[i].fecha, hora: control[i].hora, observacion: control[i].observacion, 
                    tiempotranscurrido: control[i].tiempotranscurrido, caloriasquemadas:control[i].caloriasquemadas, replicate: control[i].replicate})
            
            await insercionDuplicados.save();
    
        }

    }
}

module.exports={
    postControl,
    datosDUplicados

     
}