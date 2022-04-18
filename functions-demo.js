// TYPE CONVERSION
let anakinHealth = 100;

// console.log(String(anakinHealth));
// console.log(Boolean(anakinHealth));

// console.log(+anakinHealth); //strict
// console.log(Number(anakinHealth)); //strict
// console.log(parseInt(anakinHealth)); //loose

// STRING METHODS
let theWinnerIs = "Anakin is the winner.";
let newWinner = theWinnerIs.replace("n", "l");
// console.log(newWinner);

let newWinnerAll = theWinnerIs.replaceAll("n", "l");
// console.log(newWinnerAll);

let newWinnerSplit = theWinnerIs.split(" ");
// console.log(newWinnerSplit);
let newWinnerJoin = newWinnerSplit.join(" ");
// console.log(newWinnerJoin);

function isAnakinAlive() {
    if(anakinHealth > 0) {
        console.log("Anakin is alive!");
    } else {
        console.log("Anakin is dead...")
    }
}

function surpriseAttack(attack) {
    anakinHealth -= attack;
    isAnakinAlive();
    console.log(anakinHealth);
}

// surpriseAttack(20);

function greeting(person1, person2) {
    console.log(`${person1} says to ${person2}: Hello there.`);
}

// greeting("Obi-Wan Kenobi", "General Grievous");

function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);
    return possibleRolls[randomNumber];
}

let firstRoll = rollDice();
let secondRoll = rollDice();

// console.log(firstRoll);
// console.log(secondRoll);

function diceMultiplier() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();

    console.log(firstRoll * secondRoll);
}

let multipliedRoll = diceMultiplier();
console.log(multipliedRoll);