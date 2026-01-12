// O método reduce resume todos os valores do array em um único valor

const numeros = [10, 20, 30];

const somaTotal = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 0);

console.log("Soma total:", somaTotal);
