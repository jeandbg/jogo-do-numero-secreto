// Exercícios da 2a parte:

// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá Mundo!');
}

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaFulano(){
    nome = prompt('Digite o seu nome: ');
    console.log(`Olá, ${nome}!`);
}

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero() {
    numero = prompt('Digite um número');
    return numero*2;
}

function mostrarRetornoNoConsole(valor) {   //criei essa função apenas pra poder mostrar no console.
    console.log(valor);                     //coloco as outras funções dentro dela nos botões dos exercícios. 
}

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeTresValores(){
    valor1 = parseInt(prompt('Digite um número'));                  //se eu fizesse como a solução proposta, não precisaria parseInt,
    valor2 = parseInt(prompt('Digite outro número'));               //pois o programa receberia os valores diretamente como números. 
    valor3 = parseInt(prompt('Digite um terceiro número'));
    media = (valor1+valor2+valor3)/3;
    return media;
}

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorDosNumeros() {
    valor1 = parseInt(prompt('Digite um número'));
    valor2 = parseInt(prompt('Digite outro número'));
    
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;    // se eles forem iguais, vai entrar no else, então não tem problema.
    }                                                                                                                           //  |
}                                                                                                                               //  |  
                                                                                                                                //  |
// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo    //  |
                                                                                                                                //  V
// A essa altura eu me dei conta que fiz "errado". Era pra, em vez de pedir pro usuário fornecer os valores, incluí-los como parâmetros.
// não vou alterar, porque achei minha solução mais 'elegante', uma vez que, do jeito que eu fiz, o usuário é capaz de fornecer
// quaisquer valores. Além disso, gostei da minha solução de botar uma função dentro da outra com "mostrarRetornoNoConsole()".
// vou fazer a última como era 'esperado', apenas pra verificar como faço.
function elevarAoQuadrado(numero) {
    return numero*numero;
}

let valor = elevarAoQuadrado(50);
console.log(valor);






