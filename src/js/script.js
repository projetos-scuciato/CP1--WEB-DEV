// Exercicio 1!
// Declarando variavel undefined.
let variavelUndefined;
console.log(variavelUndefined); //exibe a variavel indefinida.

// Declarando variavel vazia.
let variavelVazia = "";
console.log(variavelVazia); //exibe a variavel vazia.

// Declarando variavel com valor.
let variavelValor = 1;
console.log(variavelValor); //exibe o valor da variavel.

// ----------------------------------

// Exercicio 2!


// Operadores logicos.
//guarda dois valores a duas variaveis.
let valor1 = 10; 
let valor2 = 20;

// Diferente
if (valor1 != valor2){
    console.log("Os valores são diferentes!"); //Se valor1 for diferente de valor2, ira exibira uma mensagem no console ("Os valores são diferentes!").
}

// Igual
if (valor1 == valor2){
    console.log("Os valores são iguais!") //Se valor1 for igual a valor2, ira exibira uma mensagem no console ("Os valores são iguais!").
}

// Maior ou igual
if (valor1 >= valor2){
    console.log(`O valor1 ${valor1} é maior ou igual que o valor2 ${valor2}`) //Se valor1 for maior ou igual a valo2, ira exibir uma mensagem no console (`O valor1 ${valor1} é maior ou igual que o valor2 ${valor2}`)
} else {
    console.log(`O valor1 (${valor1}) é menor que o valor2 (${valor2})`) //Senão, ira exibira uma mensagem no console (`O valor1 (${valor1}) é menor que o valor2 (${valor2})`).
}

// ----------------------------------
// Exercicio 3

let peso = prompt("Qual o seu peso em KG?"); // Recebe o peso em KG e guarda na variavel (peso).
let altura = prompt("Qual a sua altura em Metros?"); //Recebe a altura em metros e guarda na variavel (altura).
let imc = peso/(altura*altura); //Faz o calculo de IMC e guarda na variavel (imc).

//Cria um switch case para verificar se a pessoa esta abaixo do peso, no peso ideal ou acima do peso.
switch (true) {
   case imc < 18.5: // Caso o imc for abaixo de 18.5, exibira no console que a pessoa esta abaixo do peso.
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está abaixo do peso.`);
     break; //Encerra o switch se esse case for executado.
   case imc >= 18.5 && imc <= 24.9: //Caso o imc for maior ou igual a 18.5 e menor ou igual a 24.9, exibira no console que a pessoa esta no peso ideal.
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está no peso ideal.`);
     break;//Encerra o switch se esse case for executado.
   case imc > 24.9: //Caso o imc for maior do que 24.9, exibira no console que a pessoa esta acima do peso.
     console.log(`Seu IMC é ${imc.toFixed(2)} Você está acima do peso.`);
     break;//Encerra o switch se esse case for executado.
   default: //Define como default, se nenhum case for executado. 
     console.log("IMC inválido.");
 }

// Exercicio 4
for(i=0; i < 51; i++){ //Cria um laço de repetição que usara a variavel i como parametro. i começara a contar do zero e vai adicionando um até que i não seja mais menor do que 51.
  console.log(`O valor é: ${i}!`); //Exibira o valor da valor i.
}

// Exercicio 5
let usuario = prompt("Insira o nome de usuário: "); //Recebera o nome que o usuario ira colocar e guardara na variavel usuario.
let senha = prompt("Insira a senha: "); //Recebera a senha que o usuario ira colocar e guardara na variavel senha.

//Ira checar se o nome de usuario que o usuario colocou é igual a ("admin") e se a senha que o usuario colocou é igual a 1234.
if (usuario == "admin" && senha == 1234){
    console.log("Login realizado com sucesso!"); //Se as condições forem verdadeiras, ele ira exibir uma mensagem no console, dizendo ("Login realizado com sucesso!"").
} else { 
    console.log("Houve falha na autenticação!"); //Senão ele ira exibir uma mensagem no console, dizendo ("Houve uma falha na autenticação").
}

// Exercicio 6
//Ira receber sete notas que o usuario ira inserir e guardara nas variaveis nota1, nota2, nota3,...,nota7
let nota1 = prompt("Insira a primera nota: ") 
let nota2 = prompt("Insira a segunda nota: ")
let nota3 = prompt("Insira a terceira nota: ")
let nota4 = prompt("Insira a quarta nota: ")
let nota5 = prompt("Insira a quinta nota: ")
let nota6 = prompt("Insira a sexta nota: ")
let nota7 = prompt("Insira a setima nota: ")
let mediaNotas = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/7; //Fara o calculo da media das sete notas e guardara na variavel mediaNotas.

//Ira checar se a mediaNotas é maior ou igual 6.
if (mediaNotas >= 6){
    console.log("Aprovado!"); //Se for verdadeiro, ele ira exibir uma mensagem dizendo ("Aprovado").
} else{
    console.log("Reprovado!"); //Senão for verdadeiro, ele ira exibir uma mensagem dizendo ("Reprovado").
}

// Exercicio 7 
let nome = "Gabriel";
let idade = 18;
let curso = "Engenheiro de Software primeiro ano"


let titulo1 = document.querySelector("#nome1"); //Função para pegar a variavel que quero editar com o id #nome1 no HMTL
titulo1.innerHTML = (nome); //função para editar a variavel e colocar o que tem dentro da variavel nome no HTML ("Gabriel").
let titulo2 = document.querySelector("#idade1"); //Função para pegar a variavel que quero editar com o id #idade1 no HMTL
titulo2.innerHTML = (idade); //função para editar a variavel e colocar o que tem dentro da variavel idade no HTML (18).
let titulo3 = document.querySelector("#curso1"); //Função para pegar a variavel que quero editar com o id #curso1 no HMTL
titulo3.innerHTML = (curso); //função para editar a variavel e colocar o que tem dentro da variavel curso no HTML ("Engenheiro de Software primeiro ano").

// Exercicio 8
//Recebe um texto e guarda na variavel (texto).
let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

let posicaoEm = texto.indexOf("em"); //Ira procurar onde que ("em") aparece primeiro no texto e guardara na variavel (posicaoEm).
let posicaoIa = texto.lastIndexOf("ia"); //Ira procurar onde que ("ia") aparece por ultimo no texto e guardara na variavel (posicaoIa).
let contemCiencia = texto.indexOf("ciência"); //Ira procurar onde que a palavra ("ciência") aparece primeiro no texto e guardara na variavel (contemCiencia).
let contemMetodos = texto.indexOf("métodos"); //Ira procurar onde que a palavra ("métodos") aparece primeiro no texto e guardara na variavel (contemMetodos).

console.log("1) Primeira posição de 'em':", posicaoEm); //Ira exebir a primeira posição de em, que foi guardada na varialvel (posicaoEm).
console.log("2) Última posição de 'ia':", posicaoIa); //Ira exebir a ultima posição de ia, que foi guardada na varialvel (posicaoIa).
console.log("3) Palavra 'ciência' encontrada?", contemCiencia); //Ira exebir a primeira posição da palavra ciência, que foi guardada na varialvel (contemCiencia).
console.log("4) Palavra 'métodos' encontrada?", contemMetodos); //Ira exebir a primeira posição da palavra métodos, que foi guardada na varialvel (contemMetodos).

// Exercicio 9
let numString = parseFloat("100"); //declara uma variavel e insere um valor como string e transforma esse valor para float com a função parseFloat.
console.log(numString); //Mostra no console o valor de numString
console.log(typeof numString);  //Mostra no console qual o tipo da variavel numString.