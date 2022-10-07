const { Deportista, EjercicioRealizado } = require('./datos');

//Cremamos la primera  funcion con promesa para buscar por id el array Desportista y extraer un elemento

function BuscarElementoArrayUno( id ){
    return new Promise(( resolve, reject) =>{
        const ArrayUno = Deportista.find(function(Deportista){
            return Deportista.id===id;});
        ( ArrayUno )
            ?resolve(ArrayUno)
            :reject(`El deportista ${ id } no se encontro`)

    })
}

//Cremamos la segunda  funcion con promesa para buscar por id el array EjercicioRealizado y extraer un elemento

function BuscarElementoArrayDos( id ){
    return new Promise(( resolve, reject) =>{
        const ArrayDos = EjercicioRealizado.find(function(EjercicioRealizado){
            return EjercicioRealizado.id===id;});
        ( ArrayDos )
            ?resolve(ArrayDos)
            :reject
    })
}
//Declarar una constante para el id a buscar dentro de los arreglos
const id =2;

//Llamamos la funcion y las promesas creadas antes
BuscarElementoArrayUno(id)
.then((ArrayUno) =>{console.log('El deportista', ArrayUno.Nombre)})
.catch((error) =>{console.log(error)});
BuscarElementoArrayDos(id)
.then((ArrayDos) =>{console.log('quemo', ArrayDos.CaloriasQuemadas, 'calorias en el dia de Ejercicio')})
.catch((error) =>{console.log(error)});