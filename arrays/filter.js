// O método filter seleciona elementos que atendem a uma condição
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => {
  return numero % 2 === 0;
});

console.log("Array original:", numeros);
console.log("Somente pares:", pares);
