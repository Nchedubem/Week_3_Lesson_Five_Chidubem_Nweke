// Create an array with multiple elements
let myArrayWay = [10, 20, 30, 40, 50];

// Use the filter() method to create a new array containing only specific elements based on a condition
let filteredArrayWay = myArray.filter(function(element) {
  return element > 30;
});

// Log the filtered array to the console
console.log(filteredArrayWay);