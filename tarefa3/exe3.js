let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

// CONDICIONAIS if else

if (produtoA.internacional == true) {
   let valorTaxasA = produtoA.valor * 1.2
   console.log("Produto Internacional com impostos",produtoA.nome,valorTaxasA)
} else {
    let valorTaxasA = produtoA.valor * 1.12
   console.log("Produto Nacional com impostos",produtoA.nome,valorTaxasA)
}

if (produtoB.internacional == true) {
   let valorTaxasB = produtoB.valor * 1.2
   console.log("Produto Internacional com impostos",produtoB.nome,valorTaxasB)
} else {
    let valorTaxasB = produtoB.valor * 1.12
   console.log("Produto Nacional com impostos",produtoB.nome,valorTaxasB)
}

if (produtoC.internacional == true) {
   let valorTaxasC = produtoC.valor * 1.2
   console.log("Produto Internacional com impostos",produtoC.nome,valorTaxasC)
} else {
    let valorTaxasC = produtoC.valor * 1.12
    console.log("Produto Nacional com impostos",produtoC.nome,valorTaxasC)
}

