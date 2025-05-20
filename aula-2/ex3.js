let permissao = null
let idade = Number(prompt("Imforme sua idade: "));

idade >= 18 ? permissao = true : permissao = false
permissao == true ?  alert("Entrada Permitida.") : alert("Entrada Negada.")