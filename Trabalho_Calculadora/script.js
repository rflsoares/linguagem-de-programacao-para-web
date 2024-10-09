function calculadora(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b === 0) {
                return "Erro: divisão por zero";
            }
            return a / b;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(5, 0, 'divisao'));