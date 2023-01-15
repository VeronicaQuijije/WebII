const { Router } = require('express');

const { 
    EjercicioGet, 
    EjercicioPost,
    EjercicioDelete
} = require('../controllers/ejercicio');




const router = Router(); 


router.get('/', EjercicioGet )

router.post('/', EjercicioPost )


router.delete('/:id', EjercicioDelete )


module.exports= router;