const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion');
const argumentos = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crearArchivo', 'exporta un archivo la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;
let base = 7;
let comando = argumentos._[0];

switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        break;
    case 'crearArchivo':
        crearArchivo(argumentos.base);
        break;

    default:
        console.log(`Comando no reconocida: ${comando}`);

}





// crearArchivo(base)
//     .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
//     .catch(error => console.log(error));