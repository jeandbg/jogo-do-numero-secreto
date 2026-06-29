//Exercícios parte 1:

//1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
//feito, são esses arquivos aqui

//2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoClicado() {
    console.log('O botão foi clicado');
}

//4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlertaJS() {
    console.log('Eu amo JS');
}

//5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPromptCidade() {
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei-me de você`);
}

//6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somaDoisValores() {
    let valor1 = parseInt(prompt('Digite um valor: '));
    let valor2 = parseInt(prompt('Digite outro valor: '));    //se não usar parseInt(), ele soma os valores como texto!
    resultado = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é ${resultado}.`);
}