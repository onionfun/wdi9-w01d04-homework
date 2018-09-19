// What is the difference between a parameter and an argument? a parameter is what goes at the top
// as a variable of the function, the arguement is what passes through the function into
// the parameter
// Within a function, what is the difference between return and console.log?
// console.log() is a function used to print information to the console, return 
// on the other hand is a call to pass some value back up to where the call was made
// What are the implications of the ability of a function to return a value?
//you can use the same function to return different values at different points in your
//code instead of making a different function for each thing you want to return

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. 
// Yes, you've done it before, but do it again. Later in this assignment we're 
// gonna beef up our palindrome function some. See if you can do it without looking 
// back at your previous answer. The function should return true if the string is a 
// palindrome, false if not. Make sure your function will give the correct answer for 
// words with capital letters.

// const isPalindrome = (word) => {
//     let lowerWord = word.toLowerCase();
// const reverseWord = (lowerWord.split("").reverse("").join(""));
// if(lowerWord === reverseWord){
//     return true
// } else {
//     return false
// }
// }
// console.log(isPalindrome("Radar"));

// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.
// console.log(sumDigits(42));
// => 6;

// const sumDigits = (sumOfDigit) => {
//     let firstTotal = 0;
//     let newSum = sumOfDigit.toString().split("");
// for(let i=0; i<newSum.length; i++){
// const newNewSum = parseInt(newSum[i]);             //convert newSum back into digits
// firstTotal = firstTotal + newNewSum;
// }
// return firstTotal
// }
// console.log(sumDigits(42))

// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, 
// and returns the solution for sideC using the Pythagorean theorem.
// console.log(calculateSide(8, 6));
// => 10

// const calculateSide = (sideA, sideB) => {
// //sideA^2 + sideB^2 = sideC^2
// let sum1= Math.pow(sideA, 2);
// let sum2= Math.pow(sideB, 2);
// return Math.sqrt(sum1 + sum2)
// //const = Math.sqrt(sideA*sideA, sideB*sideB);
// }
// console.log(calculateSide(8, 6));

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. 
// The array should contain numbers. The function should return the sum of the numbers 
// in the array.
// Expected result:
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

const sumArray = (arr) => {
let sum = 0;
for(let i=0; i<arr.length; i++){
//console.log(arr)
sum += arr[i]
} //return after the loop is over for these results style so run the for loop and then
//after that has run all the way to arr.length, it will exit the loop and go to return
return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6. Prime Numbers
// To test whether a number is 
// Prime, you only need to test as far as the square root of that number. This is advisable 
// for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function 
// will return true (Boolean) if Prime, false if not. Hint: Check every number up to the 
// square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes 
// up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), 
// it will print all the Prime numbers up to and including 97. This function can call on the 
// previous checkPrime function.

// const checkPrime = (prime) => {
//     const squareRoot = Math.sqrt(prime);
//     for(let i=2; i<squareRoot; i++){
//         //if prime is ONLY divisible by prime and 1 => return true, check all #s up to that number to see if any are evenly divisible
//         //check all numbers up to and including X to see if they %0 must not be prime because 
//         //if trying to find factors of # if one of those factorsis >sqrt other factors have to be
//     if(prime%i === 0){ //proves it's not a prime #
//         return false;
//     } 
// }
// return true;
// }
// console.log(checkPrime(13));

// const  checkPrime = (num) => {
//     if(num < 2){ 
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if(num%i===0){
//             return false;
//     } else{
//         return true;
// }
// }
// }
// console.log(checkPrime(26));

//PART 2

// const printPrimes = (counting) => {
// for (let j = 1; j<= counting; j++) {

//     let notPrime = false;
//     for (let i = 2; i <= j; i++) {
//         if (j%i===0 && i!==j) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(j);
//     }
// }
// }
// console.log(printPrimes(99));

// cascading style sheet
//css goes in <head> tag, telling browser how to use it
// <link rel = "stylesheet" href="css/style.css">
// h1 (or what html element we want to style) is selector then we'll declare property (e.g. color) 
//and value (eg red) tags
//color.adobe.com
//expand use of selectors what are ancestors and descendants
//multiple selectors separated by a comma: h1, h2, h3{ color: red;} etc
//elements nested inside tags are related, the higher ups are ancestors eg header and if you
//have li or something inside of it, that's header's descendant
//footer li {property: value }
//or .class or #id