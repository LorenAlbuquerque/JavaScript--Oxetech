// 1 -------------------------------------

function verificarIdade(nome = "visitante", idade) {

  if (idade < 0 || idade > 120 || isNaN(idade)) {
    alert("Idade inválida. Informe um valor entre 0 e 120.");
    return;
  }

  if (idade < 18) {
    alert(`Olá, ${nome}! Você é menor de idade.`);
  } else {
    alert(`Olá, ${nome}! Você é maior de idade.`);
  }
}
while (confirm("Deseja verificar uma idade?")) {
  let nome = prompt("Digite o nome da pessoa:");
  if (!nome) nome = "visitante"; 

  let idade = parseInt(prompt("Digite a idade da pessoa:"), 10);
  verificarIdade(nome, idade);
}

//2 -------------------------------------

function calcular(num1 = 0, num2 = 1, operador = "+") {
  let resultado;

  if ((operador === "/" || operador === "%") && num2 === 0) {
    return "Erro: Divisão por zero não é permitida.";
  }

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;
    default:
      return "Operador inválido.";
  }

  return `Resultado: ${num1} ${operador} ${num2} = ${resultado}`;
}

while (confirm("Deseja fazer um cálculo?")) {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  if (isNaN(num1)) num1 = 0;

  let num2 = parseFloat(prompt("Digite o segundo número:"));
  if (isNaN(num2)) num2 = 1;

  let operador = prompt("Digite o operador (+, -, *, /, %):");
  if (!operador) operador = "+";

  let resultado = calcular(num1, num2, operador);
  alert(resultado);
}

alert("Programa encerrado. Obrigado por usar a calculadora!");

//3 -------------------------------------

let mensagemDeBoasVindas = function(nome) {
  let horaAtual = new Date().getHours();
  let saudacao;

  if (horaAtual >= 6 && horaAtual <= 11) {
    saudacao = "Bom dia";
  } else if (horaAtual >= 12 && horaAtual <= 17) {
    saudacao = "Boa tarde";
  } else if (horaAtual >= 18 && horaAtual <= 23) {
    saudacao = "Boa noite";
  } else {
    saudacao = "Olá";
  }

  alert(`${saudacao}, ${nome}!`);
};

let nomeUsuario = prompt("Digite seu nome:");
if (!nomeUsuario) {
  nomeUsuario = "visitante"; 

mensagemDeBoasVindas(nomeUsuario);

//4 -------------------------------------

const calcularDesconto = (preco, porcentagemDesconto) => {
  return preco - (preco * (porcentagemDesconto / 100));
};

while (confirm("Deseja calcular o desconto de um produto?")) {
  
  let preco = parseFloat(prompt("Digite o preço do produto:"));
  if (isNaN(preco) || preco <= 0) {
    alert("Preço inválido. Digite um valor maior que 0.");
    continue;
  }

  let desconto = parseFloat(prompt("Digite a porcentagem de desconto (ex: 10 para 10%):"));
  if (isNaN(desconto) || desconto < 0 || desconto > 100) {
    alert("Porcentagem de desconto inválida. Digite um valor entre 0 e 100.");
    continue;
  }

  let valorFinal = calcularDesconto(preco, desconto);
  alert(`Preço original: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor com desconto: R$ ${valorFinal.toFixed(2)}`);
}

alert("Programa encerrado. Obrigado por utilizar o sistema!");

//5 -------------------------------------

function executarComAtraso(mensagem, callback) {
  setTimeout(() => {
    alert(mensagem);
    callback();
  }, 2000);
}

function saudacaoFinal() {
  alert("Obrigado por aguardar! Tenha um ótimo dia! 😊");
}

executarComAtraso("Carregando informações, por favor, aguarde...", saudacaoFinal);