// Practice understanding HOF and callbacks
let numbers = [1, 2, 3, 4];
// Task 1
// notice that this built-in for each is a HOF.
// Do you understand why?
// And addTwo would be a callback in this scenario.
// Let me know if you don't understand why?
numbers.forEach(addTwo);
// output:
// 3
// 4
// 5
// 6
// Your job: Fill in my ForEach function that has the same functionality as above.
// However, this one will take the array as the first argument and the callback as the second.
function forEach(array, callback) {
  // --All your work will be in here--
}
// Test case:
forEach(numbers, addTwo);
// output:
// 3
// 4
// 5
// 6
// challenge 2
// Implement your own Map function
// map(numbers, addTwo) that will addTwo and store the resulting array in a new variable.
// do not touch code below this line
function addTwo(num) {
  console.log(num + 2);
  return num + 2;
}
