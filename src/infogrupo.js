const { json } = require("express");

const jsonInfo = {
    JuanFalconi: {
        nombre: 'Juan',
        apellido: 'Falconi',
        correoElectronico: 'juan.falconi@epn.edu.ec',
        informacionRealizada: 'Realizar el Request'
      
    },
    MiguelParedes: {
        nombre: 'Miguel',
        apellido: 'Paredes',
        correoElectronico: 'miguel.paredes@epn.edu.ec',
        informacionRealizada: 'División y revisión final de la documentación'
    },
    JuanGualotuna: {
        nombre: 'Juan',
        apellido: 'Gualotuña',
        correoElectronico: 'juan.gualotuna@epn.edu.ec',
        informacionRealizada: 'Investigación acerca de ¿qué es gist en GitHub?'
    },
    AlejandroMoreira: {
        nombre: 'Alejandro',
        apellido: 'Moreira',
        correoElectronico: 'alejandro.moreira@epn.edu.ec',
        informacionRealizada: 'Realizar Middlewares'
    },
    JaredValenzuela: {
        nombre: 'Jared',
        apellido: 'Valenzuela',
        correoElectronico: 'jared.valenzuela@epn.edu.ec',
        informacionRealizada: 'Realizar un tipo GET para la presentacion del grupo'
    },
    HeyerTinoco: {
        nombre: 'Heyer',
        apellido: 'Tinoco',
        correoElectronico: 'heyer.tinoco@epn.edu.ec',
        informacionRealizada: 'Despliegue del baskcend y un tipo de Get con los integrantes del grupo'
    },
    JosephYepez: {
        nombre: 'Joseph',
        apellido: 'Yepez',
        correoElectronico: 'joseph.yepez@epn.edu.ec',
        informacionRealizada: 'Realizar un tipo de GET para presentar productos'
    }
};

module.exports = jsonInfo;