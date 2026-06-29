// Exercícios da primeira parte.

alert('Boas vindas ao nosso site');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert(nome + " " + idade + " " + numeroDeVendas + " " + saldoDisponivel);

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

//na sobrescrição de 'nome' e 'idade' abaixo, não vai let porque let é só pra "criar" a variável.
nome = prompt('Digite seu nome');
idade = prompt('Digite sua idade');

if (idade > 18) {
    alert(nome + ", você tem "+ idade + " anos. Pode tirar a habilitação!");
}
