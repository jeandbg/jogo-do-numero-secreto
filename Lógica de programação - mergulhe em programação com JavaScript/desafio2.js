// Exercícios da 2a parte.

// 1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert('2 - Segunda \n' +
      '3 - Terça \n' +
      '4 - Quarta \n' +
      '5 - Quinta \n' +
      '6 - Sexta \n' +
      '7 - Sábado \n' +
      '8 - Domingo \n');
// coloquei os números de 2 a 8 porque me incomoda que segunda seja o 1, mas também quero usar da lógica numérica no if.

// alternativamente, aparentemente dá pra escrever usando a crase tbm (Template Strings):
alert(`2 - Segunda 
3 - Terça 
4 - Quarta 
5 - Quinta 
6 - Sexta 
7 - Sábado
8 - Domingo `);

let DiaDaSemana = parseInt(prompt('Informe o número referente ao dia da semana'));
console.log(typeof DiaDaSemana); //estou curioso se o prompt salva um inteiro ou um string.
                                 //salva como string. Então eu botei aquela função parseInt pra ficar inteiro.

if (DiaDaSemana < 2) {
    alert("Valor inválido");
} else if (DiaDaSemana < 7) {
    alert("Boa semana!");
} else if(DiaDaSemana <= 8) {
    alert("Bom fim de semana!");
} else if(DiaDaSemana > 8) {
    alert("Valor inválido");
}


// 2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um número');

if (numeroDigitado > 0) {
    alert('O número digitado é positivo');
} else if (numeroDigitado == 0) {
    alert('O número digitado é Zero');
} else {
    alert ('O número digitado é negativo');
}

// 3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Digite sua pontuação');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu');
} else {
    alert('Tente novamente para ganhar');
}

// 4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoDaConta = prompt('Digite seu Saldo:');
alert(`Seu saldo é ${saldoDaConta}`);

// 5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeDoUsuario = prompt('Digite seu nome');
alert(`Seja bem vindo ${nomeDoUsuario}`);