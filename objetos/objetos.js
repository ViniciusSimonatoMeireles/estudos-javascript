// objeto criado
let pessoa = {
  nome: "Ana",
  idade: 25,
  ativo: true
};

//acessando dados da propriedade.
console.log(pessoa.nome);
console.log(pessoa["idade"]);

//alterando dados do objeto.
pessoa.idade = 26;
pessoa.ativo = false;

// perrendo objeto com (for)
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

//objeto dentro da array
let usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "João", idade: 30 }
];
console.log(usuarios[0].nome);

// condicional que retorna apenas os nomes das propriedades que possuem idade maior ou igual a 18.
let usuarios2 = [
  { nome: "Carlos", idade: 17, logado: true},
  { nome: "Pedro", idade: 21, logado: false },
  {nome: "Vinícius", idade: 24, logado: true}
];

for (let i = 0; i < usuarios2.length; i++) {
  if (usuarios2[i].idade >= 18) {
    console.log(usuarios2[i].nome);
  }
}


