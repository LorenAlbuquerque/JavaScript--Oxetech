// 1 -------------------------------------

let anoNnaascimento = parseInt(prompt("Digite o ano de nascimento: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));
let idade = anoAtual - anoNnaascimento

if (idade >= 18) {
    console.log(`Você completa ${idade} anos em 2025 e poderá tirar a habilitação.`);
} else {
    console.log(`Você completa ${idade} anos em 2025 e ainda não poderá tirar a habilitação`);
}

//2 -------------------------------------

let idade = parseInt(prompt("Qual sua idade? "));

if (idade >= 65) {
    console.log("Você um idoso.");
} else if (idade >= 18) {
    console.log("Você é um adulto.");
} else if (idade >= 13) {
    console.log("Você é um adolescente.");
} else {
    console.log("Você é uma criança.");
}

//3 -------------------------------------

let peso = Number(prompt("Peso(KG): "));
let altura = Number(prompt("Altura(M): "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc}\nVocê está abaixo do peso.`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é: ${imc}\nVocê tem peso normal.`);
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é: ${imc}\nVocê está com Sobrepeso.`);
} else if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC é: ${imc}\nVocê está com obesidade grau 1.`);
} else if (imc >= 35 && imc <= 39.9) {
    console.log(`Seu IMC é: ${imc}\nVocê está com obesidade grau 2.`);
} else {
    console.log(`Seu IMC é: ${imc}\nVocê está com obesidade grau 3.`);
}

//4 -------------------------------------

let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))
let opcao = parseInt(prompt("--- Operações ---\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n-----------------"))
let valor;

switch (opcao) {
    case 1:
        valor = n1 + n2
        console.log(`Soma = ${valor}`);
        break;
    case 2:
        valor = n1 - n2
        console.log(`Subtração = ${valor}`);
        break;
    case 3:
        valor = n1 * n2
        console.log(`Multiplicação = ${valor}`);
        break;
    case 4:
        valor = n1 | n2
        console.log(`Divisão = ${valor}`);
        break;
    default:
        console.log("Operação não encontrada.");
}

//5 -------------------------------------

let ValorI = parseInt(prompt("Valor inicial: "));
let ValorF = parseInt(prompt("Valor final: "));
let contador;

for (let contador = ValorI; contador <= ValorF; contador++) {
    console.log(contador);
}

//6 -------------------------------------

let N = parseInt(prompt("Digite um número: "));
let soma = 0;

for (let contador = 1; contador <= N; contador++) {
    if (contador % 2 === 0) {
        soma += contador;
    }
}

console.log(`A soma dos números pares de 1 até ${N} é: ${soma}`);

//7 -------------------------------------

let neg = 0;
let pos = 0;
let numero;

do {
    numero = parseInt(prompt("Digire um número. (sair - 0):"))

    if (numero >0) {
        pos++;
    } else if (numero < 0) {
        neg++;
    }

} while (numero !== 0);

console.log(`Quantidade de números positivos: ${pos}`);
console.log(`Quantidade de números negativos: ${neg}`);

//8 -------------------------------------

const senhaCerta = "1234";
let senhaDigitada;

do {
    senhaDigitada = prompt("Digite a senha:");

    if (senhaDigitada !== senhaCerta) {
        console.log("Senha incorreta. Tente novamente.");
    }

} while (senhaDigitada !== senhaCerta);

console.log("Acesso liberado.");