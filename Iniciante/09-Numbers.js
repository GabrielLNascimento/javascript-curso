let num1 = 10
let num2 = 12

// toString() -> passa numero para string
console.log(typeof num1.toString())

// versão do número binario
console.log(num1.toString(2))

// limitar casas decimais
console.log(num1.toFixed(2))

// verificar se a variavel é um numero
console.log(!Number.isNaN(num1))
console.log(Number.isInteger(num1))
