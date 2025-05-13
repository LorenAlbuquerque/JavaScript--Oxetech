let nome = prompt("Nome: ")
let peso = parseInt(prompt("Peso: "))
let altura = parseFloat(prompt("Altura: "))
let imc = peso / (altura * altura)

let continua = confirm(`Seus Dados:\nNome: ${nome}\nPeso: ${peso}\nAltura: ${altura}\nDeseja continuar?`)

continua == true ? alert(`${nome}, seu IMC é ${imc}`) : alert("Você saiu do programa.")
