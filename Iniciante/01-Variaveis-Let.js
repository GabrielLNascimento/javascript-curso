/*
    - Não pode criar variaveis com palavras reservadas
    - Variaveis precisam ter nomes significativos
    - não pode começar uma variavel com numero
    - não podem conter espaços ou traços
    - utilizamos camelCase
    - Case-sensitive
    - Não podemos redeclarar variaveis com let
    - Não utilize var, utilize let
*/

let nome = "Gabriel";
let idade = 19;
let cidade = "Pomerode";

// Jeitos de apresentar variavel
console.log("Meu nome é:", nome);
console.log(`Tenho ${idade} anos`);
console.log("Moro em: " + cidade);

// Variavel "let" -> pode ser alterado
let num1 = 10;
console.log(num1);
num1 = 20;
console.log(num1);

