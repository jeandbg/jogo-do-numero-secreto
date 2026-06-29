//Exercícios parte 3:

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function indiceMassaCorporal(peso, altura) {
    return imc = peso/(altura*altura);
}
console.log(`Seu IMC é ${indiceMassaCorporal(100,1.75)}`);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function funcaoFatorial(numero) {
    let fatorial = 1;
    while (numero > 1) {
        fatorial = fatorial * (numero);     // na solução proposta, ele usou for. Me ocorreu que não usaram for no curso até agora.
        numero--;                           // ele também considerou o caso 0, cujo fatorial é igual a 1 (não me lembrei disto).
    }
    return fatorial;
}

console.log(funcaoFatorial(170));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function cambioParaReais(dolar){
    return dolar * 4.8;             // a solução proposta utiliza um método .toFixed(2), provavelmente pra deixar 2 casas decimais.
}                                   // vou fazer outra função conforme a solução pra exercitar. 

console.log(cambioParaReais(10));

function cambioAlternativo(dolar){
    let cambio = dolar * 4.8;       // poderia também usar um parâmetro para cotação, para deixá-la variável também.
    return cambio.toFixed(2);
}

console.log(cambioAlternativo(10));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    document.write('a área de um retângulo é de ' + area, '. O perímetro é de ', perimetro, '.|||||');
}
areaEPerimetro(3,4);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEPerimetroCircular(raio) {
    let area = 3.14 * raio * raio;          //na solução proposta, ele utilizou uma função chamada Math.PI. Gostei.
    let perimetro = 2 * 3.14 * raio;

    document.write('a área é de ' + area, '. O perímetro é de ', perimetro, '.\n');
}
areaEPerimetroCircular(3);


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for (let contador = 1; contador <= 10 ; contador++) {
        document.write(' ', numero*contador, '; ');         // "Mostre na tela" pra mim indicava a necessidade de printar no site;
    }                                                       // antes de descobrir esse 'document.write', eu ia criar um botão pra cada
                                                            // tarefa para cumprir esse requisito. Porém, na solução ele usou console.log.
                                                            // Achei que console.log não valia... mas está bem, fiz diferente. 
}

tabuada(3);
