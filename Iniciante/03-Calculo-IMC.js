const nome = "Gabriel";
const idade = 19;
const alturaMetros = 1.95;
const pesoKg = 75;

const imc = pesoKg / (alturaMetros * alturaMetros);

console.log(`Eu me chamo ${nome}, tenho ${idade} anos`);
console.log(`Meu IMC é: ${imc.toFixed(2)}`);
