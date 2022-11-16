const { Router } = require('express');

const { 
datosDUplicados,
postControl
} = require('../controllers/controlrealizado');




const router = Router(); 


router.post('/', postControl )

router.get('/', datosDUplicados )


module.exports= router;