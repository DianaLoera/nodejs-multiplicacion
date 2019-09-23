const fs = require('fs');
let base = 3;
let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base* i}`);
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let datos = '';
        for (let i = 0; i <= 10; i++) {
            datos += `${base} * ${i} = ${base* i}\n`;
        }

        fs.writeFile(`tabla-del-${base}.txt`, datos, (error) => {

            if (error) {
                reject(error);
            } else {
                resolve(`tabla-del-${base}.txt`);
            }

            console.log('el archivo ejemplo.txt ha sido creado con exito');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}