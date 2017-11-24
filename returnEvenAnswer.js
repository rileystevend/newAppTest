//this is a SSP admission problem

/* Question: Create a function that takes
an erray and returns a new erray with only
even numbers */

var originalArray = [1, 3, 6, 14, 21, 100, 2102];

var newArray = originalArray.filter(function isEven (arrayNumb) {
  if (arrayNumb % 2 === 0){
    return arrayNumb;
  }

console.log(newArray);
