let prompt = require('prompt-sync')();


let valor1 = prompt('Digite o primeiro valor: ');

let valor2 = prompt('Digite o segundo valor: ');


let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);

let soma = v1 + v2;

console.log(`Resultado: ${soma}`);


