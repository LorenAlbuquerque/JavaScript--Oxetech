let estoque = parseInt(prompt("Quantidade autal no estoque: "))
let remove = parseInt(prompt("Quantidade que deseja remover: "))
let estoqueAtual = estoque - remove

estoqueAtual < 0 ? console.log("Operação inválida: quantidade insuficiente no estoque") : console.log("Estoque atualizado: ", estoqueAtual)
