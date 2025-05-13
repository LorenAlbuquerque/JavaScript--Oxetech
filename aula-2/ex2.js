let valor = parseFloat(prompt("Imforme o valor da compra:"));
let desconto = valor >= 100 ? valor * 0.10 : valor * 0.05;
let valorFinal = valor - desconto

console.log("Valor original: ", valor);
console.log("Desconto aplicado: ", desconto);
console.log("Valor final: ", valorFinal);