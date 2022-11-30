// 7.[ ]Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
// Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada.
// Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
//Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
const taxaJuros = (capital, montante, tempo) => {
    const formula = Math.floor((montante-capital)*100/(capital*tempo))
    console.log (`A taxa de juros calculada é de ${formula}% ao mês`)
    return formula
}
const valorInicial = 2000
const valorAtual = 2500
const meses = 12
taxaJuros(valorInicial, valorAtual, meses)