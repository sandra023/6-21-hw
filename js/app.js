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

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 
// to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

const savingsAccount = () => {
let bankAccount = 0;
for(let i = 1; i <=10; i ++){
	bankAccount += i;
	} 
return bankAccount
}

console.log(savingsAccount());


//You got a bonus! Your pay is now doubled each week. Write code that 
// will save the sum of all the numbers between 1 - 100 multiplied by 2.

const savingsAccount2 = () => {
let bankAccount = 0;
for(let i = 1; i <=100; i ++){
	bankAccount += i*2;
	} 
return bankAccount
}

console.log(savingsAccount2());

// E. Multiples of 3 and 5
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous 
// question you've done has helpful bits of code in it that partially 
// solves this problem, look back at them.

const sumOfMultiples = (number) =>{
	let sums = 0;
for (let i = 1; i < number; i++){
	if (i % 3 === 0 || i % 5 === 0){
		sums += i;
	}	
}
return sums
}
console.log(sumOfMultiples(100));

//Did this anyway:}


// III. Arrays & Control flow
// A. Talk about it:

// What are the things in an array called?
// 1.Elements

// Do Arrays guarantee those things will be in order?
// 2. They will be in the order that you added them to the array, 
// 	  You can sort them and move them around yourself afterwards.

// What real-life thing could you model with an array?
// 3. Grocery List


// B. Easy Does It
// Create an array that contains three quotes and store it in a 
// variable called quotes.
const quotes = ["No pressure.", "Just do it.", "Prove them wrong"]
console.log(quotes);
// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
randomThings[0];

// Change the value of "Hello" to "World".
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. 
// How? Why, yes! console.log();
console.log(randomThings);

// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
ourClass[2];

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");

console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice() for these. You could use it, 
// but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string 
// of your choice to the end of the array.
myArray.push('Egon','Daenerys');
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift(1);
console.log(myArray);

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate 
// the array? What does mutate mean? Did the .reverse() method return 
//anything?

myArray.reverse();
console.log(myArray);
//Yes, I mutated (changed) the array. The indicies not have different elements.
//It retured an array where the in the exact opposite indicies

// F. Biggie Smalls
// Create a variable that contains an integer.
let integer = 1;
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

const biggerOrLessThan100 = () =>{
	if(integer<100){
		return "little number"
	} else {
		return "big number"
	}
}
console.log(biggerOrLessThan100());


// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 

const monkeyInTheMiddle = (number) => {
	if(number <5){
		return "Little Number"
	} else if(number > 10){
		return "Big Number"
		} else {
				return "monkey"
			}
		}
	
console.log(monkeyInTheMiddle(6));


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets 
// modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in 
// kristynsCloset, log the sentence "Kristyn is rocking that " + the third 
// item in Kristyn's closet + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after 
// "yellow knit hat".

kristynsCloset.splice(6,0,'raybans');
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained 
// knit hat" instead of yellow.
kristynsCloset[6] = "stained knit hat"
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first 
// element in Thom's shirts array.
console.log(`Thom is wearing a ${thomsCloset[0][0]} today.`);

// In the same way, access one item from Thom's pants array.
console.log(`Thom is wearing a ${thomsCloset[0][0]} and ${thomsCloset[1][1]} today.`);

// Access one item from Thom's accessories array.
thomsCloset[2][1];
console.log(thomsCloset[2][1]);


// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce 
// in a grey button-up, jeans and wool scarf!"
console.log(`Doesn't Thom look amazing in his ${thomsCloset[0][0]} and ${thomsCloset[2][2]} today?!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify 
// the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);

// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a 
// parameter name that returns a greeting with the argument interpolated 
// into the greeting?

const printGreeting = (name) => {
	return `Hi ${name}, how are you doing?`
}

console.log(printGreeting('Ben'));

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. 
// The function should print the name and a message saying that that person 
// is cool.

const printCool = (name) =>{
	return `Your cool ${name}!`
}

console.log(printCool('Docter Who'));


// C. calculateCube
// Write a function calculateCube that takes a single number and 
// prints the volume of a cube made from that number.

const calculateCube = (number) =>{
	return number*number*number 
}

console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string 
// of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. Test your function on every 
// vowel and make sure it's working. In general, when you write 
// functions, take a minute to test them with different values to make 
// sure they behave the way you want.


const isVowel = (letter) =>{
	let vowelArray = ["a","e","i","o","u"];
for (let i = 0; i <vowelArray.length; i++){
	if(letter.toLowerCase() == vowelArray[i]){
		return `${letter} is a vowel`
	} else {
	return `${letter} is not a vowel`
}
}
}
console.log(isVowel("B"));
console.log(isVowel("A"));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers where each number is 
// the length of the corresponding string.

const getTwoLengths = (string1,string2) => {
	stringLength = [string1.length, string2.length];
	return stringLength
	
}

console.log(getTwoLengths('hello','you'));










