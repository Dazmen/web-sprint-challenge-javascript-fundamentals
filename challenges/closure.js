// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: it is due to closure and being able to reach one level above the nested function's scope to gain access to that variable
  


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = num => {
  let counter = 0;
  for(let i = 1; i <= num; i++){
    counter += i
  };
  return counter
};
// Recusive solutions, for funsies
const summation2 = num => {
  if(num <= 0){
    return 0
  } else {
    return summation2(num - 1);
  }
};

console.log("Closure 2", summation(4))
console.log("Closure 2 Recursion", summation(4))