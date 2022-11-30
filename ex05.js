// 5.[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
const comparison = (number1,number2) => {
    if (number1>number2) {
        console.log ("O number1 é maior do que o number2")
    } else {
        console.log ("O number2 é maior do que o number1")
    }
    return
}
const firstNumber = 18
const secondNumber = 11
comparison (firstNumber,secondNumber)