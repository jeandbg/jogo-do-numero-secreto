//Exercícios da parte 3.

//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;
while (contador < 10) {
    alert(contador + 1);  // fiz assim pra usar o mesmo contador na função seguinte
    contador++;
}

//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

while(contador >=0) {
    alert(contador);
    contador--;
}

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contagemRegressiva = prompt('Informe um número para contagem regressiva.');

while(contagemRegressiva >=0) {
    alert(contagemRegressiva);
    contagemRegressiva--;
}

//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contagemProgressiva = prompt('Informe um número para contagem progressiva.');
contador = 0;
while (contador <= contagemProgressiva){
    alert(contador);
    contador++;
}