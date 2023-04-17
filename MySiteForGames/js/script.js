"use strict";

//LET:

console.log("bananas");

console.log("love " + "bananas");

let fruit = "apples"; //let - переменная (как string, int, double и т.д.), fruit - название переменной, apples - содержимое.
console.log(fruit); //тут я на консоль вывожу эту перменную, как Console.WriteLine();

let vegetables; //можно и вот так присвоить значение.
vegetables = "potato";
console.log(vegetables); //ну и потом на консоль вывести.

let bananasQuality = 16;
bananasQuality = 7; //переменной присваивается более новое значение, даже если ои значение уже было присвоено.
console.log(bananasQuality);

function block() {
  //это функция я назвал ее block
  let computerPartsNumber = 3;
  console.log(computerPartsNumber);
} //за пределами этой функции перменная computerPartsNumber видна не будет.
block(); //чтобы функция работала надо указать ее название после нее самой.

//КОНСТАНТЫ:

const chiliPaperQuality = 13; //это константа (constant) ее значение изменить нельзя, как в случает с let.
console.log("chili paper quality " + chiliPaperQuality);

//VAR (variable) - в переводе с англ. переменная. до появления let и const была только она.

myAge = 15; //ее первое отличие, эту перменную можно использовать до ее объявления.
console.log("Sheroz's age " + myAge);
var myAge; //вот тут я ее только объявил.
//так же она видна за пределами некоторых блоков, например if, for и подобными.

let userEyeColor = "green";
console.log(userEyeColor);

let user;

let userName = "Vasya";

user = userName;

console.log(user);
