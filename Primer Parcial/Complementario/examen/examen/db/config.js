const mongoose = require('mongoose');

const conecxionBaseDatos = async () =>{
    try {
        await mongoose.connect( process.env.DATABASE);
        console.log('arriba db');
    } catch (error) {
        console.log(error);
        throw new Error('error en db')
    }
}


module.exports={
    conecxionBaseDatos
}