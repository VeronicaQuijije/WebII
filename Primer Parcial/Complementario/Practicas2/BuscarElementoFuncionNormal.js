const { Deportista, EjercicioRealizado } = require('./datos');



//Cremamos la primera funcion para mapear por pocisiones el array Desportista y extraer un elemento
function BuscarElementoArrayUno( id ){
    const ArrayUno = Deportista.map(function(Deportista){
        return Deportista.Nombre
    })
    if( !ArrayUno[id]){
        console.log('El deportista', id, 'no se encontro');
    }
    else{
        console.log('El deportista', ArrayUno[id]);
    }

}

//Cremamos la segunda funcion para mapear por pocisiones el array Ejercicio Realizado y extraer un elemento
function BuscarElementoArrayDos( id ){
    const ArrayDos = EjercicioRealizado.map(function(EjercicioRealizado){
        return EjercicioRealizado.CaloriasQuemadas
    })
    if( ArrayDos[id]){
        console.log('quemo ', ArrayDos[id], 'calorias en su dia de Ejercicios' ,);
    }


}

//Declarar una constante para el id a buscar dentro de los arreglos
const id =2;

//Invocar la funcion con su parametro 
BuscarElementoArrayUno(id);
BuscarElementoArrayDos(id)