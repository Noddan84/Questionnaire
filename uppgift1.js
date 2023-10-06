const prompt = require('prompt-sync')({ sigint: true })
const data2 = require('./results.json');
let dataList = [];
data2[0].count += 1;
const data3 = require('./questions.json');
const fs = require('fs');
const when = new Date();

const resultYesCat = [];
const resultYesDog = [];
const resultYesFish = [];
const resultYesRabbit = [];

const resultNoCat = [];
const resultNoDog = [];
const resultNoFish = [];
const resultNoRabbit = [];

let catSumYes = 0;
let catSumNo = 0;
let dogSumYes = 0;
let dogSumNo = 0;
let fishSumYes = 0;
let fishSumNo = 0;
let rabbitSumYes = 0;
let rabbitSumNo = 0;

let running = true;
let running2 = true;

const resultTotal = [];

const questionList = [data3[0].Question1, data3[0].Question2, data3[0].Question3, data3[0].Question4, data3[0].Question5, data3[0].Question6, data3[0].Question7, data3[0].Question8, data3[0].Question9, data3[0].Question10, data3[0].Question11, data3[0].Question12, data3[0].Question13, data3[0].Question14, data3[0].Question15, data3[0].Question16, data3[0].Question17, data3[0].Question18, data3[0].Question19, data3[0].Question20];

console.log('\x1b[4m\x1b[34m\x1b.:. CODE BY NODDAN84 .:.\x1b[0m\n');
console.log("Hi and welcome to the pet-questionnaire!\n");

console.log("\nPlease, write your firstname!\n");
let firstName;
while (running) {
  firstName = prompt().trim().toUpperCase();
  if (isNaN(Number(firstName))) {
    console.log("Thank you!");
    running = false;
  }
  else {
    console.log("\x1b[31mWrite letters, please!\x1b[0m\n");
  }
}
console.log("\nPlease, write your lastname!\n");
let lastName;
while (running2) {
  lastName = prompt().trim().toUpperCase();
  if (isNaN(Number(lastName))) {
    console.log("Thank you!");
    running2 = false;
  }
  else {
    console.log("\x1b[31mWrite letters, please!\x1b[0m\n");
  }
}

console.log("\nGreetings, " + firstName + " " + lastName + "!\n");
resultTotal.push(firstName + " " + lastName);
console.log("You started this questionnaire: " + when.toDateString() + " " + when.toLocaleTimeString());
resultTotal.push(when.toDateString() + " " + when.toLocaleTimeString());

for (let i = 0; i < questionList.length; i++) {

  console.log(`\n${questionList[i].Question}\n`);
  console.log(`Please, write:\n1. YES\n2. NO`);
  let answer = prompt().trim();

  switch (answer.toUpperCase()) {

    case "1":
      {
        console.log(("\nCatpoints received: ") + questionList[i].Ja.Cat, ("\nDogpoints received: ") + questionList[i].Ja.Dog, ("\nFishpoints received: ") + questionList[i].Ja.Fish, ("\nRabbitpoints received: ") + questionList[i].Ja.Rabbit);
        console.log("Total amount of yes-answers: ")
        console.log("Cat: " + resultYesCat.push(questionList[i].Ja.Cat));
        console.log("Dog: " + resultYesDog.push(questionList[i].Ja.Dog));
        console.log("Fish: " + resultYesFish.push(questionList[i].Ja.Fish));
        console.log("Rabbit: " + resultYesRabbit.push(questionList[i].Ja.Rabbit));
      }
      break;

    case "2":
      {
        console.log("\nCatpoints received: " + questionList[i].Nej.Cat, ("\nDogpoints received: ") + questionList[i].Nej.Dog, ("\nFishpoints received: ") + questionList[i].Nej.Fish, ("\nRabbitpoints received: ") + questionList[i].Nej.Rabbit);
        console.log("Total amount of no-answers: ");
        console.log("Cat: " + resultNoCat.push(questionList[i].Nej.Cat));
        console.log("Dog: " + resultNoDog.push(questionList[i].Nej.Dog));
        console.log("Fish: " + resultNoFish.push(questionList[i].Nej.Fish));
        console.log("Rabbit: " + resultNoRabbit.push(questionList[i].Nej.Rabbit));
      }
      break;

    default:
      {
        i--;
        console.log("\x1b[31mNeed to choose 1 or 2! Your answer was " + answer + "!\x1b[0m\n");
      }
  }
}

console.log("Yes-answers for cat: " + resultYesCat);
console.log("Yes-answers for dog: " + resultYesDog);
console.log("Yes-answers for fish: " + resultYesFish);
console.log("Yes-answers for rabbit: " + resultYesRabbit + "\n");
console.log("No-answers for cat: " + resultNoCat);
console.log("No-answers for dog: " + resultNoDog);
console.log("No-answers for fish: " + resultNoFish);
console.log("No-answers for rabbit: " + resultNoRabbit + "\n");

console.log("Total cat: " + (resultYesCat + "," + resultNoCat));
console.log("Total dog: " + (resultYesDog + "," + resultNoDog));
console.log("Total fish: " + (resultYesFish + "," + resultNoFish));
console.log("Total rabbit: " + (resultYesRabbit + "," + resultNoRabbit));

let totalPercent = [];

for (let i = 0; i < resultYesCat.length; i++) {
  catSumYes += resultYesCat[i];
}
for (let i = 0; i < resultNoCat.length; i++) {
  catSumNo += resultNoCat[i];
}
console.log("\nCat total score: " + (catSumYes + catSumNo));
let catPercent = ((catSumYes + catSumNo) / 50);
totalPercent.push(catPercent);
console.log("Your value for Cat: " + (catPercent * 100) + "%.\n");

for (let i = 0; i < resultYesDog.length; i++) {
  dogSumYes += resultYesDog[i];
}
for (let i = 0; i < resultNoDog.length; i++) {
  dogSumNo += resultNoDog[i];
}
console.log("Dog total score: " + (dogSumYes + dogSumNo));
let dogPercent = ((dogSumYes + dogSumNo) / 50);
totalPercent.push(dogPercent);
console.log("Your value for Dog: " + (dogPercent * 100) + "%.\n");

for (let i = 0; i < resultYesFish.length; i++) {
  fishSumYes += resultYesFish[i];
}
for (let i = 0; i < resultNoFish.length; i++) {
  fishSumNo += resultNoFish[i];
}
console.log("Fish total score: " + (fishSumYes + fishSumNo));
let fishPercent = ((fishSumYes + fishSumNo) / 50);
totalPercent.push(fishPercent);
console.log("Your value for Fish: " + (fishPercent * 100) + "%.\n");

for (let i = 0; i < resultYesRabbit.length; i++) {
  rabbitSumYes += resultYesRabbit[i];
}
for (let i = 0; i < resultNoRabbit.length; i++) {
  rabbitSumNo += resultNoRabbit[i];
}
console.log("Rabbit total score: " + (rabbitSumYes + rabbitSumNo));
let rabbitPercent = ((rabbitSumYes + rabbitSumNo) / 50);
totalPercent.push(rabbitPercent);
console.log("Your value for Rabbit: " + (rabbitPercent * 100) + "%.\n");

console.log("Your highest pet-value is: " + ((Math.max(...totalPercent)) * 100) + "%.");
resultTotal.push("Your highest pet-value is: " + ((Math.max(...totalPercent)) * 100) + "%.");

if ((Math.max(...totalPercent)) === catPercent) {
  resultTotal.push("Cat fits you most!");
  console.log("Cat fits you most!");
}
if ((Math.max(...totalPercent)) === dogPercent) {
  resultTotal.push("Dog fits you most!");
  console.log("Dog fits you most!");
}
if ((Math.max(...totalPercent)) === fishPercent) {
  resultTotal.push("Fish fits you most!");
  console.log("Fish fits you most!");
}
if ((Math.max(...totalPercent)) === rabbitPercent) {
  resultTotal.push("Rabbit fits you most!");
  console.log("Rabbit fits you most!");
}

console.log("\nYour lowest pet-value is: " + ((Math.min(...totalPercent)) * 100) + "%.");
resultTotal.push("Your lowest pet-value is: " + ((Math.min(...totalPercent)) * 100) + "%.");

if ((Math.min(...totalPercent)) === catPercent) {
  resultTotal.push("Cat fits you least!");
  console.log("Cat fits you least!");
}
if ((Math.min(...totalPercent)) === dogPercent) {
  resultTotal.push("Dog fits you least!");
  console.log("Dog fits you least!");
}
if ((Math.min(...totalPercent)) === fishPercent) {
  resultTotal.push("Fish fits you least!");
  console.log("Fish fits you least!");
}
if ((Math.min(...totalPercent)) === rabbitPercent) {
  resultTotal.push("Rabbit fits you least!");
  console.log("Rabbit fits you least!");
}

console.log("\n" + resultTotal);
dataList.push(data2);
console.log("\nBefore insert to list: \n");
console.log(dataList);
resultTotal.push(data2);
console.log("\n After insert to list: \n");
console.log(resultTotal);

fs.writeFile('./results.json', JSON.stringify(resultTotal, null, 2), (err) => {
  if (err) throw err;
  console.log('\nData written to JSON-file');
});




