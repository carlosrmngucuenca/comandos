const fs = require('fs');

let listadoPorHacer=[];

const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(
        'db/data.json',
        data,
        (err)=>{
            if(err) throw new Error('no grabar',err);
        }
    )

}

const getListado = ()=>{
    cargarDB();
    return listadoPorHacer
}
const cargarDB = ()=>{

    try {
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHacer=[];
    }
}

const crear = (descripcion)=>{
    cargarDB();
    let porhacer = {
        descripcion ,
        completado:false

    };

    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const actualizar = (descripcion,completado=true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>tarea.descripcion === descripcion);

}

module.exports={
    crear
}