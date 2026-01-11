for (let i = 1; i <= 10; i++){
    console.log(i);
}
//retorna os numeros de 1 a 10 no console.

for (let i = 0; i <=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//retorna apenas os numeros pares no console.

let senha = "";
let tentativas = 0;

while (senha !== "1234" && tentativas < 3) {
  console.log("Tentativa:", tentativas + 1);
  tentativas++;
}

//enquanto a variavel senha não retornar "1234" e a variavel tentativas for menor que 3, o loop será iniciado.