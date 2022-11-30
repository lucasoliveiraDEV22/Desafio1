// 1.[ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela os números de 1 até o número que você enviou
// function printingNumber(number1) {
//Posso fazer dessa forma:
//     for (number1=1; number1<30; number1++)
//     console.log (number1)
// }
// printingNumber ()
//OU dessa:
const count = function (number) {
    for (let i=1; i<=number; i++){
        console.log(i)
    }
    return
}
const number = 17
count (number)