// Verificação de idade

const idade = 18;

if (idade >= 18) {
    console.log('Você é maior de idade.')
} else {
    console.log('Você é menor de idade.')
}

// Par ou Ímpar

const verificaParOuImpar = 51;

if (verificaParOuImpar % 2 == 0) {
    console.log('Par')
} else {
    console.log('Ímpar')
}

// Verificação de Número Positivo, Negativo ou Zero

const numero = 0;

if (numero > 0) {
    console.log('Número positivo')
} else if (numero < 0) {
    console.log('Número negativo')
} else {
    console.log('Zero')
}

// Tabuada

const tabuada = 10;

for (let i = 0; i <= 10; i++) {
  console.log(tabuada * i)
}