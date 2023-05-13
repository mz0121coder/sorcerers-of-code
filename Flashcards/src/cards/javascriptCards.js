const javascriptCards = [
	{
		question: 'What does the keyword this refer to in JavaScript?',
		options: [
			'a) The global object',
			'b) The object that called the function',
			'c) The function itself',
			'd) The object where the function is defined',
		],
		answer: 'b) The object that called the function',
	},
	{
		question:
			'What is the output of the following code: console.log(typeof [])?',
		options: ['a) Array', 'b) Object', 'c) ArrayObject', 'd) undefined'],
		answer: 'b) Object',
	},
	{
		question: 'What is the difference between let and var in JavaScript?',
		options: [
			'a) let is block-scoped, while var is function-scoped.',
			'b) let is block-scoped, while var is function-scoped and can be redeclared.',
			'c) let is function-scoped, while var is block-scoped.',
			'd) let and var are completely interchangeable and have no differences.',
		],
		answer:
			'b) let is block-scoped, while var is function-scoped and can be redeclared.',
	},
	{
		question: 'What is a closure in JavaScript?',
		options: [
			'a) A data structure used to implement recursion',
			'b) A function that takes in a callback function as an argument',
			'c) A function that has access to variables in its outer scope',
			'd) A function that is not visible to the outside world',
		],
		answer: 'c) A function that has access to variables in its outer scope',
	},

	{
		question: 'What is hoisting in JavaScript?',
		options: [
			'a) A technique used to optimize code execution speed.',
			'b) A way of defining variables before their actual declaration.',
			'c) The process of moving function declarations to the top of the scope.',
			'd) The process of allocating memory for variables and functions.',
		],
		answer:
			'c) The process of moving function declarations to the top of the scope.',
	},
	{
		question:
			'What is the difference between null and undefined in JavaScript?',
		options: [
			'a) null is a primitive value, while undefined is an object.',
			'b) null represents an intentional absence of any object value, while undefined represents an uninitialized or missing value.',
			'c) null is a string value, while undefined is a numeric value.',
			'd) null and undefined are interchangeable and have no differences.',
		],
		answer:
			'b) null represents an intentional absence of any object value, while undefined represents an uninitialized or missing value.',
	},
	{
		question: 'What is the purpose of the try-catch statement in JavaScript?',
		options: [
			'a) To execute code regardless of whether an error occurs or not.',
			'b) To handle errors and exceptions in code execution.',
			'c) To prevent the execution of certain lines of code.',
			'd) To pause code execution for a specified amount of time.',
		],
		answer: 'b) To handle errors and exceptions in code execution.',
	},
	{
		question:
			'What is the difference between function declaration and function expression in JavaScript?',
		options: [
			'a) Function declaration uses the function keyword, while function expression uses the => operator.',
			'b) Function declaration is hoisted to the top of the scope, while function expression is not.',
			'c) Function declaration creates a variable with the function name, while function expression does not.',
			'd) Function declaration and function expression are completely interchangeable and have no differences.',
		],
		answer:
			'b) Function declaration is hoisted to the top of the scope, while function expression is not.',
	},
	{
		question: 'What is the difference between let and const in JavaScript?',
		options: [
			'a) let is block-scoped, while const is function-scoped.',
			'b) let is mutable, while const is immutable.',
			'c) let can be declared without being initialized, while const must be initialized during declaration.',
			'd) let and const are completely interchangeable and have no differences.',
		],
		answer: 'b) let is mutable, while const is immutable.',
	},
	{
		question:
			'What is the purpose of the Array.prototype.map() method in JavaScript?',
		options: [
			'a) To loop through each element of an array and return a new array with modified elements.',
			'b) To filter an array and return a new array with only the elements that pass the test.',
			'c) To reduce an array to a single value based on a provided function.',
			'd) To sort the elements of an array in ascending or descending order.',
		],
		answer:
			'a) To loop through each element of an array and return a new array with modified elements.',
	},
	{
		question: 'What is a promise in JavaScript?',
		options: [
			'a) An object representing the eventual completion or failure of an asynchronous operation and its resulting value.',
			'b) A synchronous function that returns a value.',
			'c) A type of JavaScript function that accepts a callback as an argument.',
			'd) A data structure used to store key-value pairs.',
		],
		answer:
			'a) An object representing the eventual completion or failure of an asynchronous operation and its resulting value.',
	},
	{
		question:
			'What is the difference between a for loop and a forEach loop in JavaScript?',
		options: [
			'a) for loop is faster, while forEach loop is slower.',
			'b) for loop can only be used on arrays, while forEach loop can be used on any iterable object.',
			'c) for loop allows access to the current index, while forEach loop does not.',
			'd) for loop requires an explicit exit condition, while forEach loop does not.',
		],
		answer:
			'b) for loop can only be used on arrays, while forEach loop can be used on any iterable object.',
	},
	{
		question: 'What is the purpose of the Object.keys() method in JavaScript?',
		options: [
			"a) To return an array of the object's values.",
			"b) To return an array of the object's keys.",
			"c) To return an array of the object's key-value pairs.",
			"d) To sort the object's keys in ascending or descending order.",
		],
		answer: "b) To return an array of the object's keys.",
	},
	{
		question: 'What is the difference between == and === in JavaScript?',
		options: [
			'a) == performs a strict comparison, while === performs a loose comparison.',
			'b) == compares values only, while === compares both values and types.',
			'c) == and === are completely interchangeable and have no differences.',
			'd) == compares reference values, while === compares primitive values.',
		],
		answer:
			'b) == compares values only, while === compares both values and types.',
	},
	{
		question: 'What is the purpose of the JavaScript Date object?',
		options: [
			'a) To create a new instance of a JavaScript function.',
			'b) To represent a specific date and time.',
			'c) To convert strings to numbers and vice versa.',
			'd) To perform arithmetic operations on numerical data.',
		],
		answer: 'b) To represent a specific date and time.',
	},
	{
		question:
			'What is the difference between a function declaration and a function expression in JavaScript?',
		options: [
			'a) Function declaration can be used before it is declared, while function expression cannot.',
			'b) Function expression can be used before it is declared, while function declaration cannot.',
			'c) Function declaration is defined using the function keyword, while function expression is defined using the => operator.',
			'd) Function expression creates a new variable in the local scope, while function declaration does not.',
		],
		answer:
			'a) Function declaration can be used before it is declared, while function expression cannot.',
	},
	{
		question:
			'What is the purpose of the JavaScript Array.prototype.filter() method?',
		options: [
			'a) To loop through each element of an array and return a new array with modified elements.',
			'b) To filter an array and return a new array with only the elements that pass the test.',
			'c) To reduce an array to a single value based on a provided function.',
			'd) To sort the elements of an array in ascending or descending order.',
		],
		answer:
			'b) To filter an array and return a new array with only the elements that pass the test.',
	},
	{
		question:
			'What is the purpose of the JavaScript Array.prototype.reduce() method?',
		options: [
			'a) To loop through each element of an array and return a new array with modified elements.',
			'b) To filter an array and return a new array with only the elements that pass the test.',
			'c) To reduce an array to a single value based on a provided function.',
			'd) To sort the elements of an array in ascending or descending order.',
		],
		answer:
			'c) To reduce an array to a single value based on a provided function.',
	},
];

export { javascriptCards };
