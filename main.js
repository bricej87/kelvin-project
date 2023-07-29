const kelvin = 293;
// Since the value of Kelvin will not change, kelvin is set as a constant.
var celsius = (kelvin - 273);
// we subtracted 273 from kelvin to get the celsius variable
var fahrenheit = (celsius * (9 / 5) + 32);
// This variable takes the celsius value and converts it to Fahrenheit.
fahrenheit = Math.floor(fahrenheit);
// This line of code rounds the decimal figure to a whole number to produce the Fahrenheit variable as a whole number
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
