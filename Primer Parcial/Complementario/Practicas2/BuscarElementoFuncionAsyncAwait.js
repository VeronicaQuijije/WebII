const { Deportista, EjercicioRealizado } = require('./datos');

//Cremamos la primera  funcion asincronica para buscar por id el array Desportista y extraer un elemento
async function BuscarElementoArrayUno( id ){
    const ArrayUno = Deportista.find(function(Deportista){
        return Deportista.id === id;
    });
    if( !ArrayUno){
        console.log('El deportista', id, 'no se encontro');
    }
    else{
        return ArrayUno;
    }

}
//Cremamos la segunda  funcion asincronica para buscar por id el array EjercicioRealizado y extraer un elemento
async function BuscarElementoArrayDos( id ){
    const ArrayDos = EjercicioRealizado.find(function(EjercicioRealizado){
        return EjercicioRealizado.id===id;
    });
    if( ArrayDos ){
        return ArrayDos;
    }


}

//Declarar una constante para el id a buscar dentro de los arreglos
const id =0;


//Llamamos las funciones anteriores y mostramos los datos de los arreglos
(async ()=>{
    try {
          const ArrayUno = await BuscarElementoArrayUno(id);
          const ArrayDos = await BuscarElementoArrayDos(id)
          console.log('El Deportista ', ArrayUno.Nombre);
          console.log('quemo', ArrayDos.CaloriasQuemadas, 'calorias en el dia de Ejercicio');
    } catch (error) {
        console.log();
    }
})();