function calculator(value1, operator, value2) {
  switch(operator) {
    case('+'):
      result = value1 + value2;
      break;
    case('-'):
      result = value1 - value2;
      break;
    case('*'):
      result = value1 * value2;
      break;
    case('/'):
      result = value1 / value2;
      break;
    default:
      alert('something went wrong');
      break;
  }
  return result;
}

//uncomment next lines one by one, then check the console for results
console.log(calculator(1, '+', 1))
console.log(calculator(3, '-', 2))
console.log(calculator(3, '*', 2))
console.log(calculator(30, '/', 2))
console.log(calculator(5, '/', 0))

//don't change this line
module.exports = calculator;