const { Router } = require('express');

const { 
ReciclajeGet,
ReciclajeDelete
} = require('../controllers/reciclaje');




const router = Router(); 


router.get('/', ReciclajeGet )

router.delete('/:id', ReciclajeDelete)


module.exports= router;