var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:3000/api/'
})


router.post('/producto/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {   

        httpAxios.post(`/ejercicio`,{
            fecha: req.body.fecha,
            hora: req.body.hora,
            tiempo: req.body.tiempo,
            calorias: req.body.calorias
        }).then(respuesta=>{
            res.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`/ejercicio/${req.body._id}`,{
            fecha: req.body.fecha,
            hora: req.body.hora,
            tiempo: req.body.tiempo,
            calorias: req.body.calorias
        }).then(respuesta=>{
            res.redirect('/')
        })

    }

})

module.exports = router;