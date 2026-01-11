let logado = true;
let planoPago = false;

if (logado && planoPago) {
  console.log("Acesso completo");
} else {
  console.log("Acesso limitado");
}
//apenas se ambas as condições retornarem "true", exibira o texto "Acesso completo" no console.

let isAdmin = false;
let isModerador = true;

if (isAdmin || isModerador) {
  console.log("Acesso permitido");
}
// se uma das duas condições retornarem "true", o texto "Acesso permitido" será exibido no console.

let acessoPermitido = false;

if (!acessoPermitido) {
  console.log("Usuário ativo");
}
// inverte o typeOf da variavel retornando "true" nesse caso, exibindo "Usuário ativo" no console.
