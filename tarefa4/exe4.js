let receita = [
    {'valor': 10, 'gorjeta': 1},
    {'valor': 20, 'gorjeta': 1},
]

let valorTotal = 0
for (item of receita) {
valorTotal = item.valor + valorTotal
}
console.log("Valor total: ",valorTotal)


let valorTotalGorjeta = 0
for (item of receita) {
valorTotalGorjeta = (item.gorjeta + valorTotal)
}
console.log("Valor total com gorjeta: ",valorTotalGorjeta)

//Exercício 1: Qual o valor total de vendas sem gorjeta?
//Exercício 2:Qual o valor total de vendas com gorjeta?
