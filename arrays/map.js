const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);
console.log(numeros);
//(.map) vai selecionar cada item da array e criar uma nova array com a função passada.


const nomes = ["Vinicius", "Ana", "Bruno", "Carla"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);
//(.map) passa por cada item da lista e realiza a função passada retornando uma nova array.

