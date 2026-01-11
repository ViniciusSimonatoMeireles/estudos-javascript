function mensagemDeBoasVindas(){
    console.log("Seja bem-vindo(a) ao sistema!");   
}
mensagemDeBoasVindas();
// ao chamar essa função, ela emite uma mensagem no console.

function mensagemPersonalizada(nome){
    console.log("Seja bem-vindo(a), " + nome);
}
mensagemPersonalizada("Vinícius");
// ao chamar essa função, ela soma uma mensagem no console com o parametro informado.

function soma(a, b){
    return a + b;
}
let  resultado = soma(10, 5);
console.log(resultado);
// essa função possui um retorno, somando e devolvendo os parametros informados.

function maiorDeIdade(idade) {
  return idade >= 18;
}
console.log(maiorDeIdade(17));
// retorna um valor boleano com base no parametro retornado.

function parOuImpar(number){
    if(number % 2 === 0){
        return "Par";
    } else return "Ímpar";
}
console.log(parOuImpar(4));
// retorna uma string de "Par" ou "Ímpar" com base no resultado na condicional.

