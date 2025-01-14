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
console.log(`Thom is wearing a ${thomsCloset[0][2]} and ${thomsCloset[1][1]} today.`);

// Access one item from Thom's accessories array.
thomsCloset[2][1];
console.log(thomsCloset[2][1]);


// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce 
// in a grey button-up, jeans and wool scarf!"
console.log(`Doesn't Thom look amazing in his ${thomsCloset[0][3]} and ${thomsCloset[2][2]} today?!`);

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

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter 
// as an argument: an array of strings. The function should return an array 
// of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (array) =>{
	wordsArrayStringLength = []
	for (let i = 0; i <array.length; i++){
		wordsArrayStringLength.push(array[i].length); 
	}
return wordsArrayStringLength
}
console.log(getMultipleLengths(['hello','you','pretty','thing']));


// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and 
// returns the largest of them. If all numbers are the same, it doesn't 
// matter which one is returned. If the two largest numbers are the 
// same, one of them should be returned. Be sure to test it with larger 
// values in each of the three locations.

const maxOfThree = (num1,num2,num3) =>{
	let maxNumber = 0
	if(num1 > num2 && num1 > num3){
		maxNumber = num1
	} else if (num2 > num1 && num2 > num3){
		maxNumber = num2 
	} else {
		maxNumber = num3
	}
	return maxNumber
}
		
console.log(maxOfThree(11,5,1));
console.log(maxOfThree(1,24,8000));
console.log(maxOfThree(45,300000,12));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an 
// array of strings. The method should return the longest word in the array. 
// In case of a tie, the method should return the word that appears first 
// in the array.


const printLongestWord = (wordArray) =>{
 let longestWord = []
 	for (let i = 0; i<wordArray.length; i++){
	if (wordArray[i].length> longestWord.length){
		longestWord = wordArray[i];
	}
}
return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// I. transmogrify
// Write a Javascript function called transmogrify. This function should 
// accept three arguments, which you can assume will be numbers. Your 
// function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first 
// two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to 
// the power of 2 is 225.

const transmogrify = (num1,num2,num3) => {
	return (num1*num2)**num3
}

console.log(transmogrify(5,3,2));

// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function 
// reverseWordOrder that accepts a single argument, a string. The 
// function should return a string with the order of the words reversed. 
// Don't worry about punctuation.

// See if you can do it without googling.

// Remember: You can index directly into a string:

const reverseWordOrder = (wordString) =>{
	reverseWordsArray = [];
	wordsArray = [];
	buffer = " ";
	
	for (let i = 0; i<wordString.length; i++){
		buffer += wordString[i];
		if(wordString[i]== " "){
			wordsArray.push(buffer);
			buffer = " ";
		}
	}
	if (buffer.length > 0){
		wordsArray.push(buffer);
	}
	for (let i =wordsArray.length; i>=0; i--){
		reverseWordsArray += wordsArray[i];
	}
	return reverseWordsArray
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));


// K. Get down and dirty with Math.random()
// Write a function that will return a random integer between 1 and 10. Test it.
const randomInteger = () => { 
return Math.floor(Math.random()*11);
}
console.log(randomInteger());

// Write a function that will return a random integer between 10 and 100. Test it.
const randomInteger2 = () => { 
return Math.floor(Math.random()*100)+10;
}
console.log(randomInteger2());


// Write a function that will return a random number between 532 and 13267. Test it.

const randomInteger3 = () => {
return Math.floor(Math.random()*13267)+532;
}
console.log(randomInteger3());

// Write a function that will return a random number between 1 and 10. Test it.
const randomNumber = () => {
 return Math.random() * (10-1)+1;
}
console.log(randomNumber());

// Add a few more quotes to the quotes array from question III-B-1 above. 
// Write a function that will take an array as a parameter, and return a 
// random element from that array. Call your function a few times, passing 
// in the quotes array. Give it a nice semantic name like getRandomElement.

const getRandomElement = (array) =>{
	return array[Math.floor(Math.random()*array.length)];
}
	console.log(getRandomElement(["No pressure", "Just do it", "Prove them wrong", "Sieze the day"]));

// Objects
// Let's set up an object data structure. Let's say we have a website that 
// sells products, and we have a user of our website, and we want to store 
// that user's data. The object data structure is a good way to organize 
// the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. Set the other values to 
// whatever you would like.

const user = {
	name: "Doctor Who",
	email: "tardis@galifrey.com",
	age: 912,
	purchased: []
}

console.log(user);


// B. Update the user
// Our user has changed his or her email address. Without changing the 
// original user object, update the email value to a new email address.
// Our user has had a birthday! Without changing the original user object, 
// increment the age value using the postfix operator. Hint: age++


user.email = "DrWho@earth.com";
user.age ++; //user.age += 1 also works
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want 
// to collect.

// Without changing the original user object, add a new key location to the 
// object, and give it a value or some-or-other location (a string).

user.location = "Barcelona";

console.log(user);


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". 
// Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
console.log(user);

// Our user has purchased an item! They have purchased some "peace of mind". 
// Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
console.log(user);

// Our user has purchased an item! They have purchased some "Merino jodhpurs". 
// Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way 
//that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user 
// object.

// Write a friend object into your user object and give the friend a name, age, 
// location, and purchased array (empty for now)

user.friend = {
	name: "Rose Tyler",
	age: 23,
	location: "Earth 2",
	purchased: []
}

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);

// The friend has purchased "The One Ring". Use .push() to add "The One Ring" 
// to the friend's purchased array.
user.friend.purchased.push("The One Ring");
console.log(user.friend.purchased);


// The friend has purchased "A latte". Use .push() to add "A latte" to the 
// friend's purchased array.
// Console.log just "A latte" from the friend's purchased array.

user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array 
// (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints 
// each element to the console.


for(let i = 0; i < user.purchased.length; i++){
	console.log(user.purchased[i]);
}

for (let i = 0; i <user.friend.purchased.length; i++){
	console.log(user.friend.purchased[i]);
}



// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. 
// When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify 
// the user object.

const updateUser = () => {
	user.age++;
	user.name = user.name.toUpperCase();
}

updateUser();
console.log(user);


// Write a function oldAndLoud that performs the exact same tasks as 
// updateUser, but instead of hard-coding it to only work on our user 
// object, make it take a parameter person, and have it modify the
// object that is passed in as an argument when the function is called. 
// Call your oldAndLoud function with user as the argument.


const oldAndLoud = (person) => {
 person.age++
 person.name = person.name.toUpperCase()
}

oldAndLoud(user);
console.log(user);






















