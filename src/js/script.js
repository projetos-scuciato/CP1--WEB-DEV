// Exercicio 1!
// Declarando variavel undefined
let variavelUndefined;
console.log(variavelUndefined);

// Declarando variavel vazia
let variavelVazia = "";
console.log(variavelVazia);

// Declarando variavel com valor
let variavelValor = 1;
console.log(variavelValor);

// ----------------------------------

// Exercicio 2!


// Operadores logicos
let valor1 = 10;
let valor2 = 20;

// Diferente
if (valor1 != valor2){
    console.log("Os valores são diferentes!");
}

// Igual
if (valor1 == valor2){
    console.log("Os valores são iguais!")
}

// Maior ou igual
if (valor1 >= valor2){
    console.log(`O valor1 ${valor1} é maior ou igual que o valor2 ${valor2}`)
} else {
    console.log(`O valor1 (${valor1}) é menor que o valor2 (${valor2})`)
}

// ----------------------------------
// Exercicio 3

let peso = prompt("Qual o seu peso em KG?");
let altura = prompt("Qual a sua altura em Metros?");
let imc = peso/(altura*altura);

switch (true) {
   case imc < 18.5:
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está abaixo do peso.`);
     break;
   case imc >= 18.5 && imc <= 24.9:
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está no peso ideal.`);
     break;
   case imc > 24.9:
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está acima do peso.`);
     break;
   default:
     console.log("IMC inválido.");
 }

// Exercicio 4
for(i=0; i < 51; i++){
  console.log(`O valor é: ${i}!`);
}

// Exercicio 5
let usuario = prompt("Insira o nome de usuário: ");
let senha = prompt("Insira a senha: ");


if (usuario == "admin" && senha == 1234){
    console.log("Login realizado com sucesso!");
} else {
    console.log("Houve falha na autenticação!");
}