// A value and a variable 
let variable = 'value'; // a string

// Using console.log to log the values on the screen
console.log(variable)

// Defining some common data types
let num = 9; // a int
let isCool = true ; // boolean
let num_float = 0.000000248; // float num
let name; // undefined

console.log('****Different Data type****')

// Logging the datatype 
console.log(typeof(num))
console.log(typeof(isCool))
console.log(typeof(num_float))
console.log(typeof(name))

console.log('****Dynamic Testing****')
// Testing out Dynamic typing of javascript 
let random = 10

// Overwriting a variable with another data type 
random = 'Over Writing!'
console.log(random)
console.log(typeof(random))
