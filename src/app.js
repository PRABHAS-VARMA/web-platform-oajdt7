const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(first, last) {
  const modifiedFood = [];
  let i;
  for (i = first; i < last - 1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles');
  foods.splice(3, 0, 'icecream');
  return foods;
}

// Progression 3:
function checkNumber(numberArray, operation) {
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}

function isEven(i) {
  let x = i % 2;
  if (i % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isPrime(i) {
  let x = Math.sqrt(i);
  for (let a = 2; a <= x; a++)
    if (i % a === 0) {
      return false;
    }
  return i > 1;
}

// Progression 4:
function reject(i) {
  let arrayOfNonPrimes = [];
  i.forEach((x) => {
    if (isPrime(x)) {
      return;
    }
    arrayOfNonPrimes.push(x);
  });
  return arrayOfNonPrimes;
}

function nonPrime(numberArray) {
  ans = reject(numberArray);
  return ans;
}

// Progression 5:
const isEvenUsingLambda = (i) => i % 2 === 0;

// Progression 6:
function findSquareOfNumbers(myArray) {
  let x = myArray.map((i) => i ** 2);
  return x;
}

// Progression 7:
function multiply(myArray) {
  return myArray.reduce((final, current) => final * current);
}

function sumOfSquares(myArray) {
  let x = myArray.reduce(
    (finalSum, currentNumber) => finalSum + currentNumber ** 2,
    0
  );
  return x;
}
