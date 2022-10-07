

const Deportista = [
    {
        id: 1,
        Nombre: 'Veronica Quijije',
        Peso: 55,
        Altura: 1.60,
        Edad: 20
    },
    {
        id: 2,
        Nombre: 'Kethy Quijije',
        Peso: 59,
        Altura: 1.50,
        Edad: 23
    },
    {
        id: 3,
        Nombre: 'Mariano Quijije',
        Peso: 65,
        Altura: 1.90,
        Edad: 23
    },
    {
        id: 4,
        Nombre: 'Anthony Lopez',
        Peso: 65,
        Altura: 1.65,
        Edad: 21
    },
    {
        id: 5,
        Nombre: 'Dante Delgado',
        Peso: 49,
        Altura: 1.80,
        Edad: 22
    },
]

const EjercicioRealizado = [
    {
        id: 1,
        idTipoEjercicio: 1,
        idDeportista: 1,
        Fecha: '6 de Octubre del 2022',
        Hora: '20:00',
        TiempoTranscurrido:'2:00',
        CaloriasQuemadas: 1900
    },
    {
        id: 2,
        idTipoEjercicio: 2,
        idDeportista: 2,
        Fecha: '6 de Octubre del 2022',
        Hora: '15:00',
        TiempoTranscurrido:'02:00',
        CaloriasQuemadas: 1500
    },
    {
        id: 3,
        idTipoEjercicio: 3,
        idDeportista: 3,
        Fecha: '6 de Octubre del 2022',
        Hora: '21:00',
        TiempoTranscurrido:'01:00',
        CaloriasQuemadas: 3000
    },
    {
        id: 4,
        idTipoEjercicio: 4,
        idDeportista: 4,
        Fecha: '6 de Octubre del 2022',
        Hora: '19:00',
        TiempoTranscurrido:'02:00',
        CaloriasQuemadas: 2050
    },
    {
        id: 5,
        idTipoEjercicio: 5,
        idDeportista: 5,
        Fecha: '6 de Octubre del 2022',
        Hora: '23:00',
        TiempoTranscurrido:'05:00',
        CaloriasQuemadas: 2500
    },
]


module.exports = {
    Deportista,
    EjercicioRealizado
}