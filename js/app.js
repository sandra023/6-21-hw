// I. Variables & Datatypes
// A. Q + A

// How do we assign a value to a variable?
	//1. const or let variableName = value

// How do we change the value of a variable?
	//2. variableName = newVariableValue

// How do we assign an existing variable to a new variable?
	//3. const or let newVariableName = existingVariableName 

// Remind me, what are declare, assign, and define?
	//4. Declare: to let you know what type of variable (const or let)
	// 	 Assign: to store the value of the variable
	//   Define: gives value 

// What is pseudocoding and why should you do it?
	//5. Its writing the coding steps out in english. This can help you to
	//write and think through all the steps of your code

// What percentage of time should be spent thinking about how youre going to 
//solve a problem vs actually typing in code to solve it?
	//6. 80% vs 20%

//B. Strings

//Create a variable called firstVariable.
let firstVariable = 0;
//Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number.
firstVariable = 3
// Store the value of firstVariable in a new variable called secondVariable
let numberVariable = firstVariable;
// Change the value of secondVariable to any string.
numberVariable = "Good Bye"
// What is the value of firstVariable?
// Value is still three. 
console.log(firstVariable)
// Create a variable called yourName and set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name is " and the 
// variable yourName so that it returns a new string with them concatenated.

let yourName = "Sandra";

const greeting = () => {
console.log("Hello my name is " + yourName + ".");}

greeting();

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all 
// log statements print true in the console. Answers should be all be valid 
// JS syntax and not weird things that don't make sense but happen to print 
// true to the console.

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false);
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a 
// cow, it will print "Hey! You're not a cow."

let animal = "cow";
if (animal === "cow"){
	console.log("mooooo");
}

const notACow = () =>{
let animal = "pig";
if (animal !== "cow"){
	console.log("Hey your not a cow!");
}}
notACow();

// E. Driver's Ed
// Make a variable that holds a person's age. Be semantic.

// Write code that will print out "Here are the keys!", if the age is 
// 16 years or older, or, if the age is younger than 16, a message 
// should print "Sorry, you're too young."

const canTheyDrive = () =>{
let age = 21
if (age>= 16){
	return 'Here are the keys.'
} else {
	return 'Sorry, you are too young.'
}
}
console.log(canTheyDrive());


// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++){
	console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and 
// including 400.
for (let i = 10; i <=400; i++){
	console.log(i);
}

// Write a loop that will print out every third number starting with 11 and 
// going no higher than 4000.
for (let i = 11; i<=4000; i+=3){
	console.log(i)
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100.
for (let i = 1; i <= 100; i++){
	console.log(i)
}

// Adjust your code to add a message next to even numbers only that 
// says: "<-- is an even number".


for (let i = 1; i <= 100; i++){
	if (i % 2 === 0){
		console.log(`${i} <--- is an even number.`)
	} else {
		console.log(i);

	}
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if 
// the number is a multiple of five.

for (let i =0; i <=100; i++){
	if(i % 5 === 0 && i !== 0){
		console.log(`I found a i ${i}. High five!`);
	} 
}

// Add to the code from above to print out "I found a number. 
// Three is a crowd" if the number is a multiple of three.

for (let i =0; i <=100; i++){
	if(i % 5 === 0 && i !== 0){
		console.log(`I found a i ${i}. High five!`);
	} else if (i % 3 === 0){
		console.log(`I found a ${i}. Three is a crowd.`);
	}
}

// For numbers divisible by both three and five, be sure your code 
// prints both messages.

for (let i =0; i <=100; i++){
	if(i % 5 === 0 && i !== 0){
		console.log(`I found a ${i}. High five!`);
	} else if (i % 3 === 0){
		console.log(`I found a ${i}. Three is a crowd.`);
	} else if (i % 3 === 0 && i % 5 === 0){
		console.log(`I found a ${i}. High five! Three is a crowd.`);
	}
}


