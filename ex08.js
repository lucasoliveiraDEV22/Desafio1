// 8.[ ] Escreva um programa onde, você cria uma função geradora de desconto.
/**A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
*Os descontos funcionam da seguinte forma:
-1Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
-2Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
-3Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
-4Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
-5Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
-6Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
-7Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
-8Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
-9Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
-10Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
-11Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
-12Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela:
-Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
-Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

const clientPurchase = (nameCostumer, totalValuePurchase, firstPurchase, payInCash) => {
    nameCostumer = 'Rodrigo'
    if (firstPurchase === true && payInCash === true && totalValuePurchase>=1000) {
        console.log (nameCostumer, "Obrigado pela compra!", 'O valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.3, 'reais', 'Você recebeu 30% de desconto!')
    } else if (firstPurchase === true && payInCash === true && totalValuePurchase<1000 && totalValuePurchase>=500 ){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.25, 'reais', 'Você recebeu 25% de desconto!')
    } else if (firstPurchase === true && payInCash === true && totalValuePurchase<500 ){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é:', totalValuePurchase, 'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.2, 'reais', 'Você recebeu 20% de desconto!')
    } else if (firstPurchase === true && payInCash === false && totalValuePurchase>=1000) {
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é:', totalValuePurchase, 'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.2, 'reais', 'Você recebeu 20% de desconto!')
    } else if (firstPurchase === true && payInCash === false && totalValuePurchase<1000 && totalValuePurchase>=500 ){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.15, 'reais', 'Você recebeu 15% de desconto!')
    } else if (firstPurchase === true && payInCash === false && totalValuePurchase<500){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.1, 'reais', 'Você recebeu 10% de desconto!')
    } else if (firstPurchase === false && payInCash === true && totalValuePurchase>=1000) {
        console.log (nameCostumer, "Obrigado pela compra!", 'O valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.2, 'reais', 'Você recebeu 20% de desconto!')
    } else if (firstPurchase === false && payInCash === true && totalValuePurchase<1000 && totalValuePurchase>=500 ){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.15, 'reais', 'Você recebeu 15% de desconto!')
    }  else if (firstPurchase === false && payInCash === true && totalValuePurchase<500){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.1, 'reais', 'Você recebeu 10% de desconto!')
    }  else if (firstPurchase === false && payInCash === false && totalValuePurchase>=1000) {
        console.log (nameCostumer, "Obrigado pela compra!", 'O valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.1, 'reais', 'Você recebeu 10% de desconto!')
    } else if (firstPurchase === false && payInCash === false && totalValuePurchase<1000 && totalValuePurchase>=500 ){
        console.log (nameCostumer,"Obrigado pela compra!", 'valor total é de:', totalValuePurchase,'reais', 'O valor com desconto é:', totalValuePurchase-totalValuePurchase*0.05, 'reais', 'Você recebeu 5% de desconto!')
    } else {
        console.log ("Obrigado pela compra!", 'valor total é:', totalValuePurchase, 'Recebe um cupom de desconto de:', Math.floor(Math.random ()*(20-10)+10), '%')
    }
    return
}
let nameOfCostumer = 'Rodrigo'
let totalValueFromPurchase = 499
let firstPurchase = false
let payInCash = false
clientPurchase (nameOfCostumer, totalValueFromPurchase, firstPurchase, payInCash)