let listaNumeros = [2, 4, 6, 8];

for (let numero = 0; numero < listaNumeros.length; numero++){
    console.log(listaNumeros[numero]);
}
// o (for) percorre a lista imprimindo todos os numeros da array criada.

let soma = 0;
let listaNumeros2 = [10, 20, 30];

for(let numero = 0; numero < listaNumeros2.length; numero++){
    soma += listaNumeros2[numero];
}
console.log(soma);
//o (for) percorre a lista somando todos os numeros da array criada.

let numeros = [3, 7, 12, 2, 9, 4];
let maior = numeros[0];

for (let numero = 0; numero < numeros.length; numero++) {
  if (numeros[numero] > maior) {
    maior = numeros[numero];
  }
}
console.log(maior);
//percorre a array e armazena na variavel (maior), o numero de maior valor dessa lista.

let listaNumeros3 = [2, 3];

listaNumeros3.pop();      // remove do final o numero 3
listaNumeros3.push(4);    // adiciona no final o numero 4
listaNumeros3.shift();    // remove o primeiro numero da lista
listaNumeros3.unshift(1); // adiciona o numero 1 no início da lista

console.log(listaNumeros3);
