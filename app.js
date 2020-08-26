//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        
        break;
    case 'listar':
        let listados = porHacer.getListado();
        for (let tarea of listados) {
            
        }
        console.log('Mostrar por hacer');
        
        break;
    case 'actualizar':
        console.log('act por hacer');
        
        break;
    
    default:
        console.log('comando desconocido');
        break;
}