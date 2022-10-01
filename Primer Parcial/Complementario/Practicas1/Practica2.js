//* Descripcion de los Id de Tipo Ejercicio*//
const TipoEjercicio=[
    {
        id:1,
        tipoejercio: "Flexibilidad",
        nombre: "Tonny Bailon",
        cedula: 0978594126,
        edad: 22
    },
    {
        id:2, 
        tipoejercio: "Resistencia",
        nombre: "Stefania Solorzano",
        cedula: 0969405874,
        edad: 25
    },
    {
        id:3,
        tipoejercio: "Equilibrio",
        nombre: "Anthony Santana",
        cedula: 0989574125,
        edad: 22
    },
    {
        id:4,
        tipoejercio: "Levantamiento de Peso",
        nombre: "Maholy Palma",
        cedula: 0969405481,
        edad: 25
    },
    {
        id:5,
        tipoejercio: "Aerobico",
        nombre: "Maria Lopez",
        cedula: 0985717432,
        edad: 25
    }
]
// Id de Deportista
const Deportista=[
    {
        id:1,
        Nombre: "María Anchundia",
        Peso: "12 Kg",
        Altura: 1.70 ,
        Edad: 26
    },
    {
        id:2,
        Nombre: "Anthony Holguin",
        Peso: "13 Kg",
        Altura: 1.55 ,
        Edad: 22
    },
    {
        id:3,
        Nombre: "Marilyn Lopez",
        Peso: "13 Kg",
        Altura: 1.60 ,
        Edad: 23
    },
    {
        id:4,
        Nombre: "Abel Quijije",
        Peso: "12 Kg",
        Altura: 1.80 ,
        Edad: 30
    },
    {
        id: 5,
        Nombre: "Nicol Anchundia ",
        Peso: "13 Kg",
        Altura: 1.59 ,
        Edad: 24
    }
]


const EjercicioRealizado=[
    {
        id: 1,
        idtipoejercio: 1,
        iddeportista: 1456 ,
        fecha: 11-10-2022 , 
        hora: "10h00" ,
        tiempotranscurrido: "10 minutos",
        caloriasquemadas: 10
    },
    {
        id: 2,
        idtipoejercio: 2,
        iddeportista: 1457,
        fecha: 12-10-2022 , 
        hora: "13h00" ,
        tiempotranscurrido: "30 minutos",
        caloriasquemadas: 25
    },
    {
        id: 3,
        idtipoejercio: 3,
        iddeportista: 1458 ,
        fecha: 13-10-2022 , 
        hora: "15h00" ,
        tiempotranscurrido: "45 minutos",
        caloriasquemadas: 30
    },
    {
        id: 4,
        idtipoejercio: 4,
        iddeportista:1460 ,
        fecha: 13-10-2022 , 
        hora: "18h00" ,
        tiempotranscurrido: "30 minutos",
        caloriasquemadas: 25
    },
    {
        id: 5,
        idtipoejercio: 5,
        iddeportista: 1469,
        fecha: 14-10-2022 , 
        hora: "10h00" ,
        tiempotranscurrido: "45 minutos",
        caloriasquemadas: 20
    }
]

module.exports={
    TipoEjercicio, Deportista, EjercicioRealizado
}
