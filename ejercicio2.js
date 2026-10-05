// Validar PIN => While

const prompt = require('prompt-sync')();

const pinCorrect = "8976";

let intento = prompt("Escribe tu PIN: ");

while (intento != pinCorrect) {
    console.log("PIN incorrecto :(");

    intento = prompt("Escribe tu PIN nuevamente: ");
}

console.log("Bienvenido a Nequi");