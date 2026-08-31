// Strings
let str1 = "Gabriel"
let str2 = 'Gabriel'
let str3 = `Gabriel`

// Numbers
let num1 = 10
let num2 = 10.5
let num3 = -10
let num4 = 0

// Boolean
let verdadeiro = true
let falso = false

// Undefined
let undef; // não aponta para nenhum local da memória

// Null
let vazio = null // ausencia de valor intencional


// Imutabilidade -> Valores primitivos nunca são alterados
let nome = "Gabriel"
nome.toUpperCase()
console.log(nome)

// Precisa criar um novo valor (variavel)
nome = nome.toUpperCase()
console.log(nome)

// uso do typeof
console.log(typeof nome)