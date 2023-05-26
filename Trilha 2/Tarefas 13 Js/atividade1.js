// Solicita os números ao usuário
var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
var numero3 = prompt("Digite o terceiro número:");

// Converte os números de string para número
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

// Verifica qual é o maior número
var maiorNumero;
if (numero1 >= numero2 && numero1 >= numero3) {
  maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  maiorNumero = numero2;
} else {
  maiorNumero = numero3;
}

// Apresenta a mensagem de alerta com o maior número
alert("O maior número é: " + maiorNumero);
