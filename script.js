// Instructions

// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
// Count Characters: Create a function that counts the number of characters in a string.
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Sum of Array: Create a function that calculates the sum of all elements in an array.
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
// Prime Number Check: Create a function to check if a number is prime or not.
// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )



//String Manipulation Functions:

//Reverse a String
function reverseString(str) {
    const reversed = str.split('').reverse().join('');
    console.log("Reversed string:", reversed);
}

reverseString("hello"); 

//Count Characters
function countCharacters(str) {
    console.log("Number of characters:", str.length);
}

countCharacters("hello"); 


//Capitalize Words
function capitalizeWords(sentence) {
    const capitalized = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log("Capitalized sentence:", capitalized);
}

capitalizeWords("hello world"); 

//Array Functions


//Find Maximum and Minimum
function findMax(arr) {
    const max = Math.max(...arr);
    console.log("Maximum value:", max);
}

function findMin(arr) {
    const min = Math.min(...arr);
    console.log("Minimum value:", min);
}

findMax([1, 2, 3, 4, 5]); 
findMin([1, 2, 3, 4, 5]); 



//Sum of Array
function sumArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of array:", sum);
}

sumArray([1, 2, 3, 4, 5]); 


//Filter Array:
function filterArray(arr, condition) {
    const filtered = arr.filter(condition);
    console.log("Filtered array:", filtered);
}

const isEven = num => num % 2 === 0;
filterArray([1, 2, 3, 4, 5], isEven); 




//Mathematical Functions:


//Factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log("Factorial of", num + ":", result);
}

factorial(5);



//Prime Number Check:
function isPrime(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(num + " is prime:", prime);
}

isPrime(7);


//Fibonacci Sequence
function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci sequence:", fib);
}

fibonacci(8);




































