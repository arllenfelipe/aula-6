/*- Após resolver cada exercício, tente reescrever partes do seu código para  
deixá-lo mais legível.

Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
armazenada em uma constante "isItemABoolean".

Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
01

- Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
existir, exiba no console a mensagem "A string "abacaxi" existe no array  
fruits.";
- Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
exiba no console a mensagem "A string "pera" existe no array fruits.";
- Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
"Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ['morango', 'banana', 'mamão']
if (fruits.includes('abacaxi')){
console.log('A string "Abacaxi" existe no array fruits')
}
else if (fruits.includes('pera')){
console.log('A string "pera" existe no array fruits')
}
else {
console.log("Nem abacaxi nem pera existe dentro do array fruits")
}
/*
02

- Armazene em uma constante apenas a hora atual na qual você está fazendo este  
exercício. Ex.: 18;
- À partir das 6, exiba "Bom dia!" no console;
- À partir das 12, exiba "Boa tarde!";
- À partir das 18, exiba "Boa noite!".

Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/

const horaAtual = 12
if (horaAtual >= 6 && horaAtual <= 11){
console.log("Bom dia!")
}
else if (horaAtual >= 12 && horaAtual <= 17){
console.log("Boa tarde!")
}
else if (horaAtual >= 18){
console.log("Boa noite!")
}
/*
03

- Armazene sua idade em uma constante;
- Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
armazenada em uma variável;
- Se a idade não atende às condições acima, a variável deve armazenar a  
mensagem "A entrada é R$ 30,00.";
- Exiba a mensagem no console;
- Agora, teste diferentes idades para se certificar que a condição do `if`  
também está funcionando.
*/
const idade = 18;
if (idade <= 7 || idade >= 65){
entrada = ("Para você, a entrada é gratuita!")
}
else {
entrada = ("A entrada é R$ 30,00.")
}
console.log(entrada)
/*
04

- Utilize um for loop para gerar um novo array com apenas os números entre  
11 e 90 presentes no array "numbers" (incluindo 11 e 90);
- Exiba o novo array no console;
- O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];
let newArray = [];
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] >= 11 && numbers[i] <= 90) {
newArray.push(numbers[i])
}
}
console.log(newArray)
/*
05

- O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
e strings;
- Considerando este array, substitua os "X" da frase abaixo pelas informações  
corretas;
- Gere essas informações à partir de um for loop;
- Exiba a frase no console.

"O crazyArray tem X booleans, X números e X strings."
*/

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]
let booleanos = [];
let numeros = [];
let strings = [];
for (let i = 0; i < crazyArray.length; i++){
if (typeof crazyArray[i] == "boolean"){
booleanos.push(crazyArray[i])
}
else if (typeof crazyArray[i] == "number"){
numeros.push(crazyArray[i])
}
else if (typeof crazyArray[i] == "string"){
strings.push(crazyArray[i])
}
}
console.log(`O crazyArray tem ${booleanos.length} booleans, ${numeros.length} números e ${strings.length} strings.`)


/*
06

- Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
array com apenas os números pares;
- Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
do último número ímpar e do último número par devem constar na frase;

- Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
ser 0.

"Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

const randomNumbers = [73, 4, 67, 10, 31, 58]
let impares = [];
let pares = [];
for (let i = 0; i < randomNumbers.length; i++){
if (randomNumbers[i] % 2 == 0){
pares.push(randomNumbers[i]);
}
else {
impares.push(randomNumbers[i])
}
}

console.log(`Numeros ímpares: ${impares}. Números pares: ${pares}.`)



/* 07 

- Mini Desafio: Calculadora de Índice de Massa Corporal (IMC) do Centro Médico ALRN
- Você foi contratado para desenvolver uma calculadora de Índice de Massa Corporal (IMC) para o nosso centro de saúde da ALRN. 
- O IMC é calculado usando a fórmula: IMC = peso / (altura * altura).
- Seu programa deve avaliar dois arrays, um que armazena os pesos (em kg) de um conjunto de 15 pacientes e suas respectivas alturas (em metros) e, em seguida, calcular e exibir seu IMC. 
- Além disso, o programa deve fornecer uma classificação do IMC de acordo com a tabela abaixo:

-- IMC < 18.5: Abaixo do peso
-- 18.5 <= IMC < 25: Peso normal
-- 25 <= IMC < 30: Sobrepeso
-- IMC >= 30: Obeso

Protótipo do código do array - Proposta 01:
*/

/*
Protótipo do código do array - Proposta 02:

let arrayCompletos = [
[nomez, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
...

];
- O programa deverá receber os arrays com os dados dos 15 pacientes, você deve criar estes aarrays com dados simulados;
- Ao final da execução o programa deverá imprimir linha por linha as informações de cada paciente, ou seja, teremos 15 linhas de acordo com o seguinte formato:

saída = 

'Paciente (1): Nome: Johny Cage - Peso: 78 Kg - Altura: 1.80 m - IMC: 24.07 - Diagnóstico: Peso normal'
'Paciente (2): Nome: Scorpion - Peso: 98 Kg - Altura: 1.87 m - IMC: 28.02 - Diagnóstico: Sobrepeso'
'Paciente (3): Nome: Joel Miller - Peso: 50 Kg - Altura: 1.80 m - IMC: 15.43 - Diagnóstico: Abaixo do peso'
...
'Paciente (15): Nome: XXX - Peso: YY Kg - Altura: X.X m - IMC: ZZZZ - Diagnóstico: HHHH'

*/

let arrayPesos = [65, 54, 63, 90, 67, 38, 71, 82, 59, 72, 88, 64, 78, 85, 92];
let arrayAlturas = [1.80, 1.98, 1.73, 1.85, 1.60, 1.72, 1.78, 1.83, 1.65, 1.70, 1.87, 1.62, 1.77, 1.79, 1.50];
let arrayNomes = ["Pedro Victor", "Jose Arthur", "Pedro Augusto", "Ana Kamika", "Carlos Eduardo", "Lucas Silva", "Edurado Costa", "Maria Luiza", "Felipe Souza", "Juliana Azevedo", "Rafael Matheus", "Miguel Alves", "Henrique Leandro", "Camila Fonseca", "Josue"];
let arrayIMCs = [];
let contador = 0;

function calcularIMcs(peso, altura){
return (peso / (altura * altura))
}

for (let i = 0; i < arrayPesos.length; i++){
let imc = calcularIMcs(arrayPesos[i], arrayAlturas[i])
arrayIMCs.push(imc)
}

function classificacaoIMcs(imc){
if (imc < 18.5) {
  return "Abaixo do peso";
} 
else if (imc < 25) {
  return "Peso normal";
}
else if (imc < 30) {
  return "Sobrepeso";
}
else {
  return "Obeso";
}
}

for (let i = 0; i < arrayNomes.length; i++){
let informacaoPaciente = (`Paciente (${i}): Nome: ${arrayNomes[i]} - Peso: ${arrayPesos[i]} Kg - Altura: ${arrayAlturas[i]} m - IMC: ${arrayIMCs[i]} - Diagnóstico: ${classificacaoIMcs(arrayIMCs[i])}`) 
console.log(informacaoPaciente)
}

