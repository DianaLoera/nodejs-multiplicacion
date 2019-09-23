const fs = require('fs'); //invocas un archivo
let newTable = new Array(10);
let stringTable = '';
let fileName = 'Tabla del ';
let base = 8;
fileName = fileName + base.toString();

for(let i = 1; i<=10; i++){
let message = `${base} * ${i} = ${base * i}`
    console.log(message);
    newTable[i] = message.toString();

}
for(let count = 1; count<=10; count++){
    stringTable = stringTable + newTable[count]+ '\n';
}

// fs.writeFile('ejemplo.txt','Hola que hace',(error) => {
//     if(error) throw error;

//     console.log('el archivo ejemplo.txt ha sido creado con exito');

// });
fs.writeFile(fileName, stringTable, (error) => {
    if(error) throw error;
    // console.log(`${base}`);
});