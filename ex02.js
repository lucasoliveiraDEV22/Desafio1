// 2.[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const multiplicationtable = function (numberMultiplication) {
    if (numberMultiplication<1 || numberMultiplication>10) {
        console.log ("Não podemos aceitar números menores que 1 ou maiores que 10")
    } else {
        for (let i=1; i<=10; i++) {
            console.log (i, "x",numberMultiplication, "=", i*numberMultiplication)
        }
    }
    return
}
const numberX = 3
multiplicationtable (numberX)

