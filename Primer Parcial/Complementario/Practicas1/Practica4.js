const { TipoEjercicio, Deportista, EjercicioRealizado} = require('./Practica2')


function RepetitivasFor(){
    for(let iterador  = 0; iterador<TipoEjercicio.length;iterador++){
        console.log(TipoEjercicio[iterador]);
    }
    for(let iterador  = 0; iterador<Deportista.length;iterador++){
        console.log(Deportista[iterador]);
    }
    for(let iterador  = 0; iterador<EjercicioRealizado.length;iterador++){
        console.log(EjercicioRealizado[iterador]);
    }
   


function RepetitivasWhile(){
    console.log('Ciclos While');
    let iterador = 0 ;
    while(iterador<TipoEjercicio.length){
        console.log(TipoEjercicio[iterador]);
        iterador++;
    }

    while(iterador<Deportista.length){
            console.log(Deportista[iterador]);
            iterador++;
    }
    while(iterador<EjercicioRealizado.length){
            console.log(EjercicioRealizado[iterador]);
                iterador++;
        
    }
}
    
function RepetitivasDoWhile(){
    console.log('Ciclos Do While');

    let  iterador3=0 ;
    do{
        console.log(TipoEjercicio[iterador3]);
        iterador3++;
    }
    while(iterador<TipoEjercicio.length);

    do{
        console.log(Deportista[iterador3]);
        iterador3++;
    }
    while(iterador<Deportista.length);

    do{
        console.log(EjercicioRealizado[iterador]);
        iterador++;
    }
    while(iterador<EjercicioRealizado.length);
}
    }


RepetitivasFor()  ;
RepetitivasWhile () ;
RepetitivasDoWhile ();