const mongoose = require('mongoose');



//url de mongo
const MongoUrl = "mongodb+srv://veronicaquijije:veronicaquijije@cluster0.l2hwk5w.mongodb.net/complementario-numero-3";

(async()=>{

    try {
        //conexion a mongo
        const ConexionMongoDb = await mongoose.connect(MongoUrl);  
        
        //creacion de los modelos en base a mis entidades
        const TipoEjercicio = mongoose.model("TipoEjercicio", {TipoDeEjercicio: String});

        const Deportista = mongoose.model("Deportista", {
            Nombre: String,
            Peso: Number,
            Altura: Number,
            Edad: Number
        })

        const EjercicioRealizado = mongoose.model("EjercicioRealizado",{
            idTipoEjercicio:{type: mongoose.Schema.Types.ObjectId, ref:"TipoEjercicio"},
            idDeportista:{type: mongoose.Schema.Types.ObjectId, ref:"Deportista"},
            Fecha: String,
            Hora: String,
            TiempoTranscurrido: String,
            CaloriasQuemadas: Number
        })

        // //Ingreso de Datos a las coleciones
        const tipoEjercicio1 = new TipoEjercicio({TipoDeEjercicio: 'Cardio Normal'})
        const GuardarTipoEjercicio = await tipoEjercicio1.save();
        

        const deportista1 = new Deportista({
            Nombre: "Jessica Lopez",
            Peso: 55,
            Altura: 1.50,
            Edad: 25
        })
        const GuardarDeportista = await deportista1.save();


        const ejercicioRealizado1 = new EjercicioRealizado({
            idTipoEjercicio: GuardarTipoEjercicio._id,
            idDeportista: GuardarDeportista._id,
            Fecha: '12 de Octubre del 2022',
            Hora: '19:00',
            TiempoTranscurrido: '1:00',
            CaloriasQuemadas: 2500
        })
        const GuradarEjercicioRealizado = await ejercicioRealizado1.save();


        //Mostrar por consola las 3 colecciones con diferentes instrucciones
        //For in
        const mostrarTipoEjercicio = await TipoEjercicio.find();
        for(elementos in mostrarTipoEjercicio){
            console.log(mostrarTipoEjercicio[elementos]);
        }

        //For
        const mostrarDeportista = await Deportista.find();
        for(let iterador =0; iterador<mostrarDeportista.length; iterador++){
            console.log(mostrarDeportista[iterador]);
        }
  
        //For of
        const mostrarEjercicioRealizado = await EjercicioRealizado.find();
        for(elementos of mostrarEjercicioRealizado){
            console.log(elementos);
        }


        //Actualizar un campo de la entidad deportista
        await Deportista.updateMany({_id:"63475fa317a922fd8359c6e6", Nombre:"Veronica Quijije"})
        
    } catch (error) {
        console.log(error.message);
    }

})();
