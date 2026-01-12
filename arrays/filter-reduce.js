// Combinação de filter + reduce

const numeros = [1, 2, 3, 4, 5, 6];

const somaDosPares = numeros
    .filter(numero => numero % 2 === 0)
    .reduce((total, numero) => {
     return total + numero;
    }, 0);

console.log("Soma dos números pares:", somaDosPares);
