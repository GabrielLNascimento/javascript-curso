// Ids ->    01234567
let texto = "Um texto"


// Pegar posição específica de uma string
console.log(texto[4]) // varaivel[id]
console.log(texto[99]) // undefined


// .length -> ver o tamanho da String
console.log(texto.length)


// charAt(id) -> pega a posição de um valor pelo id
console.log(texto.charAt(3))


// concat("", "", "") concatena as strings que são passadas aqui por dentro
console.log(texto.concat(" olá", " tudo", " bem?"))


// indexOf("texto") mostra o indice que começa esse "texto"
console.log(texto.indexOf("texto")) // 3


// match(expressão regular) executa uma expressão regular
console.log(texto.match(/[a-z]/g))


// search(expressão regular) procura o valor atraves da expressão regular, retorna indice
console.log(texto.search(/x/)) // 5


// replace(atual, trocar) troca um pelo outro
console.log(texto.replace("Um", "Outro"))


// slice(inicio, fim) fatia a string, retorna apenas o inicio e o fim
console.log(texto.slice(5, 8)) // xto
console.log(texto.slice(-3)) // xto -> começa contando de traz pra frente


// split(divisão do caracter) -> retorna um array de palavras aonde foi cortado
console.log(texto.split("t")) // [ 'Um ', 'ex', 'o' ]
console.log(texto.split(" ")) // [ 'Um', 'texto' ]


// toUpperCase() -> tudo maiusculo
// toLowerCase() -> tudo minusculo
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())