//this is a SSP admission problem

/* Question: Create a function that takes
an erray and returns a new erray with only
even numbers */

var original = [1, 4, 5, 6, 10, 13]

var fun = original.filter(function isEven(numb) {if(numb%2 === 0) {
  return numb
}
})

console.log(fun)
