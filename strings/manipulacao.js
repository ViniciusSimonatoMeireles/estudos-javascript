const frase = "JavaScript é muito poderoso";

const totalPalavras = frase
  .split(" ")
  .reduce((total) => total + 1, 0);

console.log(totalPalavras);
//(.split) retorna uma array com as palavras separadas pelo caracter fornecido.
//(.reduce) retorna o total de palavras na array criada.