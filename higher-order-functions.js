// Functions as arguments (1)
// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)
'use strict';
function repeat(fn, n) {
	for (let i = 0; i < n; i++) {
		fn();
	}
}

function hello() {
	console.log("Hello world");
}

function goodbye() {
	console.log("Goodbye world");
}

// repeat(hello, 5);
// repeat(goodbye, 5);



// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
	return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i]) === true) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}


function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter++;
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard has triggered ${warningCounter} time(s) today!`);
	};
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hurricaneWarning = hazardWarningCreator('Hurricane coming for you');
const tornadoWarning = hazardWarningCreator('Tornado near');


// // A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the 
// array represents the number of steps the turtle takes forwards. The second number in the array is the number 
// of steps the turtle takes to the left.
// // Here is an array of different movements made by a turtle: 
// [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
// // Use the filter method to remove any items where the turtle moves backwards or to the right 
// (i.e. where either the first of second number is an item is negative).
// // Use the map method to create a new array containing how many steps the turtle makes in total with 
// each movement (i.e. the first and second number added together).
// // Use the forEach method to log out how many steps the turtle took in each case.

//const result = words.filter(word => word.length > 6)

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const Result = turtleSteps
	.filter(element => element[0] >=0 && element[1] >= 0)
	.map(element => element[0] + element[1])
	.forEach(element => console.log(`The turtle took ${element} steps.`));

console.log(Result);

// Use the reduce function to iterate through an array of words and construct a decoded sentence (string)
// based on the following criteria:
// If the array element is exactly three characters in length, add a space character to your accumulator
// Otherwise, capitalize the LAST character of the array element and add it to your accumulator
// Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
// You will need to convert the input to an array before using .reduce()
// HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty
// string so that future iterations can concatenate more string characters

// element.length === 3, add a space
// otherwise, capitalize last character of array element, add to accumulator

function x(accumulator, element) {
	if (element.length === 3) {
		return accumulator += " ";
	} else {
		return accumulator += element[element.length-1].toUpperCase();
	}
}

function decode(string) {
	const array = string.split(" ");
	return array.reduce(x, "");
}


const string1 = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(decode(string1));
